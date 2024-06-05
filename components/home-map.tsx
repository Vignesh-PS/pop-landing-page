'use client';

import { Tooltip, Zoom } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from 'react-simple-maps';

const geoUrl = 'data/countries-110m.json';

export default function MapChart({}) {
  enum issuePassTypes {
    DO_NOT_ISSUE = 1000,
    ISSUE_WITHOUT_SUPPORT = 1001,
    ISSUE_WITH_SUPPORT = 1002,
  }
  const encryptionNames = {
    sha1WithRSAEncryption: 'Sha1 RSA',
    sha256WithRSAEncryption: 'Sha256 RSA',
    sha512WithRSAEncryption: 'Sha512 RSA',
    'rsassaPss        ': 'RSASSA PSS',
    'ecdsa-with-SHA1': 'ECDSA with SHA-1',
    'ecdsa-with-SHA256': 'ECDSA with SHA-256',
    'ecdsa-with-SHA384': 'ECDSA with SHA-384',
    'ecdsa-with-SHA512': 'ECDSA with SHA-512',
  };
  const [selectedCountryInfo, setSelectedCountryInfo] = useState([]);
  const [allCountriesData, setAllCountriesData] = useState({});
  const [selectedCountryName, setSelectedCountryName] = useState('');
  const [allIssuesCountry, setAllIssuesCountry] = useState({});

  const handleToolTip = (countryName: string) => {
    setSelectedCountryName(countryName);
    if (countryName) {
      const selectedCountryInfo = allCountriesData[countryName];
      setSelectedCountryInfo([]);
      if (selectedCountryInfo) {
        setSelectedCountryInfo(selectedCountryInfo);
      }
    }
  };

  // parse details from the json key field
  const parseDistinguishedName = (dn) => {
    const parts = dn.split(', ');
    const obj = {};

    parts.forEach((part) => {
      const [key, value] = part.split('=');
      obj[key] = value;
    });

    return obj;
  };

  const formatJsonData = (input: any = {}, countryNames: any = {}): any => {
    delete input?.default;
    const signedInfo: any = [];

    for (const inputData of Object.entries(input)) {
      const encryptionData = input[inputData[0]];
      for (const [dn, count] of Object.entries(encryptionData)) {
        const parsedDN = parseDistinguishedName(dn);
        parsedDN['COUNT'] = count;
        parsedDN['ENCRYPTION'] = encryptionNames[inputData[0]] || inputData[0];
        parsedDN['ENCRYPTION_CODE'] = inputData[0];
        parsedDN['COUNTRY_NAME'] =
          countryNames[parsedDN['C'].toUpperCase()] || parsedDN['C'];
        signedInfo.push(parsedDN);
      }
    }

    if (signedInfo.length == 0) {
      return {};
    }

    // remove duplicated encryption count of a country
    const validatedRecord = {};
    const eliminatingIndexes: number[] = [];
    for (let i = 0; i < signedInfo.length; i++) {
      const validateKey =
        signedInfo[i].C.toLowerCase() + signedInfo[i].ENCRYPTION_CODE;
      if (validatedRecord[validateKey] === undefined) {
        validatedRecord[validateKey] = i;
        continue;
      }

      const currentRecord = signedInfo[i];
      const existRecord = signedInfo[validatedRecord[validateKey]];
      const countSum = (existRecord.COUNT || 0) + (currentRecord.COUNT || 0);
      signedInfo[validatedRecord[validateKey]].COUNT = countSum;
      eliminatingIndexes.push(i);
    }
    if (eliminatingIndexes.length > 0) {
      for (const ind of eliminatingIndexes) {
        delete signedInfo[ind];
      }
    }

    const countryData = {};
    for (const signedData of signedInfo) {
      //skip the iteration if the passport records not having a valid details/country
      if (!signedData?.C) {
        continue;
      }
      let countryKey = countryNames[signedData.C.toUpperCase()] || signedData.C;
      if (countryData[countryKey]) {
        countryData[countryKey].push(signedData);
        continue;
      }
      countryData[countryKey] = [signedData];
    }

    return countryData;
  };

  const fetchJsonInfo = async () => {
    try {
      const jsonResData = await fetch(
        'https://raw.githubusercontent.com/zk-passport/proof-of-passport/main/registry/outputs/signature_algorithms.json'
      );

      const jsonData = await jsonResData.json();

      const countryNames = await import('./../public/data/all-countries.json');

      if (!jsonData) {
        return;
      }

      const allCountriesData = formatJsonData({ ...jsonData }, countryNames);
      setAllCountriesData(allCountriesData);

      setIssuesSupportsVisuals(allCountriesData);
    } catch (err) {
      console.log('err :>> ', err);
    }
  };

  const setIssuesSupportsVisuals = (countryCertsData) => {
    if (!countryCertsData) {
      return;
    }
    const countryRes = {};
    for (const country of Object.entries(countryCertsData)) {
      const countryName = country[0];
      const supportedAlgs = countryCertsData[countryName];

      countryRes[countryName] = {
        name: countryName,
        issueType: issuePassTypes.DO_NOT_ISSUE,
        defaultColor: '#b0bfa7',
      };

      if (supportedAlgs?.length) {
        countryRes[countryName].issueType =
          issuePassTypes.ISSUE_WITHOUT_SUPPORT;
        countryRes[countryName].defaultColor = '#70ac48';
        for (const alg of supportedAlgs) {
          if (
            alg?.ENCRYPTION_CODE === 'sha1WithRSAEncryption' ||
            alg?.ENCRYPTION_CODE === 'sha256WithRSAEncryption'
          ) {
            countryRes[countryName].issueType =
              issuePassTypes.ISSUE_WITH_SUPPORT;
            countryRes[countryName].defaultColor = '#548233';
          }
        }
      }
    }

    setAllIssuesCountry(countryRes);
  };

  useEffect(() => {
    fetchJsonInfo();

    // apply custom styles to map page
    document.body.classList.add('globalMap');
    // Clean up: Remove classes from body
    return () => {
      document.body.classList.remove('globalMap');
    };
  }, []);

  const highLightInfo = (countryDscs: any = []) => {
    if (countryDscs?.length > 0) {
      return (
        <div className="bg-gray">
          <h3 className="flex items-center">
            <b>{selectedCountryName || ''}</b>
            <svg
              className="ms-2 w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </h3>{' '}
          <div className="issued-dscs">
            {countryDscs.map((dsc) => (
              <p key={dsc.ENCRYPTION_CODE}>
                <span>
                  {new Intl.NumberFormat().format(
                    dsc.COUNT ? dsc.COUNT * 100000 : dsc.COUNT
                  )}
                </span>{' '}
                passports emitted with <span>{dsc.ENCRYPTION}</span>
              </p>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div>
        <h3 className="flex items-center">
          <b>{selectedCountryName || ''}</b>
          <svg
            className="ms-2 w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>{' '}
        </h3>
      </div>
    );
  };

  return (
    <div data-tip="" className="globalMap">
      <div
        id="tooltip-default"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <ComposableMap width={980} height={560}>
        <Graticule stroke="#999" strokeWidth={0.2} />
        <Sphere
          stroke="#fff"
          strokeWidth={0.1}
          id={'sphereline'}
          fill={'#ffffff00'}
        />
        <Geographies
          geography={geoUrl}
          fill="#e1e1e1"
          stroke="#fff"
          strokeWidth={0.3}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Tooltip
                classes={{ tooltip: 'country-tooltip' }}
                title={highLightInfo(selectedCountryInfo)}
                placement="right"
                arrow
                key={geo.rsmKey}
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 50 }}
              >
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  data-tooltip-target="tooltip-default"
                  onMouseEnter={() => {
                    handleToolTip(`${geo.properties.name}`);
                  }}
                  style={{
                    default: {
                      fill: allIssuesCountry[`${geo.properties.name}`]
                        ? allIssuesCountry[`${geo.properties.name}`]
                            .defaultColor
                        : '#b0bfa7',
                    },
                    hover: {
                      fill: allIssuesCountry[`${geo.properties.name}`]
                        ? '#4d7332'
                        : '#b0bfa7',
                    },
                    pressed: {
                      fill: allIssuesCountry[`${geo.properties.name}`]
                        ? '#507f3a'
                        : '#b0bfa7',
                    },
                  }}
                />
              </Tooltip>
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
