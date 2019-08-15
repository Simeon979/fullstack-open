import React, { useState, useEffect } from 'react';
import axios from "axios"

import Filter from "./components/Filter"
import Countries from "./components/Countries"

const App = () => {
  /*
  const countriesToShow =
    [
  {
    "name": "Afghanistan",
    "topLevelDomain": [
      ".af"
    ],
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "callingCodes": [
      "93"
    ],
    "capital": "Kabul",
    "altSpellings": [
      "AF",
      "Af\u0121\u0101nist\u0101n"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 27657145,
    "latlng": [
      33,
      65
    ],
    "demonym": "Afghan",
    "area": 652230,
    "gini": 27.8,
    "timezones": [
      "UTC+04:30"
    ],
    "borders": [
      "IRN",
      "PAK",
      "TKM",
      "UZB",
      "TJK",
      "CHN"
    ],
    "nativeName": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646",
    "numericCode": "004",
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "\u060b"
      }
    ],
    "languages": [
      {
        "iso639_1": "ps",
        "iso639_2": "pus",
        "name": "Pashto",
        "nativeName": "\u067e\u069a\u062a\u0648"
      },
      {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "O\u02bbzbek"
      },
      {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      }
    ],
    "translations": {
      "de": "Afghanistan",
      "es": "Afganistán",
      "fr": "Afghanistan",
      "ja": "\u30a2\u30d5\u30ac\u30cb\u30b9\u30bf\u30f3",
      "it": "Afghanistan",
      "br": "Afeganistão",
      "pt": "Afeganistão",
      "nl": "Afghanistan",
      "hr": "Afganistan",
      "fa": "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646"
    },
    "flag": "https://restcountries.eu/data/afg.svg",
    "regionalBlocs": [
      {
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }
    ],
    "cioc": "AFG"
  },
  {
    "name": "Åland Islands",
    "topLevelDomain": [
      ".ax"
    ],
    "alpha2Code": "AX",
    "alpha3Code": "ALA",
    "callingCodes": [
      "358"
    ],
    "capital": "Mariehamn",
    "altSpellings": [
      "AX",
      "Aaland",
      "Aland",
      "Ahvenanmaa"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "population": 28875,
    "latlng": [
      60.116667,
      19.9
    ],
    "demonym": "Ålandish",
    "area": 1580,
    "gini": null,
    "timezones": [
      "UTC+02:00"
    ],
    "borders": [],
    "nativeName": "Åland",
    "numericCode": "248",
    "currencies": [
      {
        "code": "EUR",
        "name": "Euro",
        "symbol": "\u20ac"
      }
    ],
    "languages": [
      {
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }
    ],
    "translations": {
      "de": "Åland",
      "es": "Alandia",
      "fr": "Åland",
      "ja": "\u30aa\u30fc\u30e9\u30f3\u30c9\u8af8\u5cf6",
      "it": "Isole Aland",
      "br": "Ilhas de Aland",
      "pt": "Ilhas de Aland",
      "nl": "Ålandeilanden",
      "hr": "Ålandski otoci",
      "fa": "\u062c\u0632\u0627\u06cc\u0631 \u0627\u0644\u0646\u062f"
    },
    "flag": "https://restcountries.eu/data/ala.svg",
    "regionalBlocs": [
      {
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }
    ],
    "cioc": ""
  },
  {
    "name": "Albania",
    "topLevelDomain": [
      ".al"
    ],
    "alpha2Code": "AL",
    "alpha3Code": "ALB",
    "callingCodes": [
      "355"
    ],
    "capital": "Tirana",
    "altSpellings": [
      "AL",
      "Shqipëri",
      "Shqipëria",
      "Shqipnia"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "population": 2886026,
    "latlng": [
      41,
      20
    ],
    "demonym": "Albanian",
    "area": 28748,
    "gini": 34.5,
    "timezones": [
      "UTC+01:00"
    ],
    "borders": [
      "MNE",
      "GRC",
      "MKD",
      "KOS"
    ],
    "nativeName": "Shqipëria",
    "numericCode": "008",
    "currencies": [
      {
        "code": "ALL",
        "name": "Albanian lek",
        "symbol": "L"
      }
    ],
    "languages": [
      {
        "iso639_1": "sq",
        "iso639_2": "sqi",
        "name": "Albanian",
        "nativeName": "Shqip"
      }
    ],
    "translations": {
      "de": "Albanien",
      "es": "Albania",
      "fr": "Albanie",
      "ja": "\u30a2\u30eb\u30d0\u30cb\u30a2",
      "it": "Albania",
      "br": "Albânia",
      "pt": "Albânia",
      "nl": "Albanië",
      "hr": "Albanija",
      "fa": "\u0622\u0644\u0628\u0627\u0646\u06cc"
    },
    "flag": "https://restcountries.eu/data/alb.svg",
    "regionalBlocs": [
      {
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": []
      }
    ],
    "cioc": "ALB"
  },
  {
    "name": "Algeria",
    "topLevelDomain": [
      ".dz"
    ],
    "alpha2Code": "DZ",
    "alpha3Code": "DZA",
    "callingCodes": [
      "213"
    ],
    "capital": "Algiers",
    "altSpellings": [
      "DZ",
      "Dzayer",
      "Algérie"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "population": 40400000,
    "latlng": [
      28,
      3
    ],
    "demonym": "Algerian",
    "area": 2381741,
    "gini": 35.3,
    "timezones": [
      "UTC+01:00"
    ],
    "borders": [
      "TUN",
      "LBY",
      "NER",
      "ESH",
      "MRT",
      "MLI",
      "MAR"
    ],
    "nativeName": "\u0627\u0644\u062c\u0632\u0627\u0626\u0631",
    "numericCode": "012",
    "currencies": [
      {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "\u062f.\u062c"
      }
    ],
    "languages": [
      {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"
      }
    ],
    "translations": {
      "de": "Algerien",
      "es": "Argelia",
      "fr": "Algérie",
      "ja": "\u30a2\u30eb\u30b8\u30a7\u30ea\u30a2",
      "it": "Algeria",
      "br": "Argélia",
      "pt": "Argélia",
      "nl": "Algerije",
      "hr": "Al\u017eir",
      "fa": "\u0627\u0644\u062c\u0632\u0627\u06cc\u0631"
    },
    "flag": "https://restcountries.eu/data/dza.svg",
    "regionalBlocs": [
      {
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": [
          "\u0627\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u0623\u0641\u0631\u064a\u0642\u064a",
          "Union africaine",
          "União Africana",
          "Unión Africana",
          "Umoja wa Afrika"
        ]
      },
      {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": [
          "\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u062f\u0648\u0644 \u0627\u0644\u0639\u0631\u0628\u064a\u0629",
          "J\u0101mi\u02bbat ad-Duwal al-\u02bbArab\u012byah",
          "League of Arab States"
        ]
      }
    ],
    "cioc": "ALG"
  }]
  */

  const [newPattern, setNewPattern] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setCountries(response.data))
  }, [])

  const countriesToShow = countries.filter(country => {
    const pattern = new RegExp(newPattern, "i")
    return pattern.test(country.name)
  })

  const handlePatternChange = (event) => {
    setNewPattern(event.target.value)
  }

  const handleFilterSubmit = (event) => {
    event.preventDefault()
    setNewPattern("")
  }

  return(
    <div>
      <Filter newPattern={newPattern} handlePatternChange={handlePatternChange} handleFilterSubmit={handleFilterSubmit} />
      <Countries countriesToShow={countriesToShow} />
    </div>
  )
}

export default App;
