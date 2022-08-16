interface State {
  key: string;
  name: string;
}

interface Country {
  key: string;
  name: string;
  states: State[];
}

export const countries: Country[] = [
  {
    key: "united_states",
    name: "United States",
    states: [
      { key: "alabama", name: "Alabama" },
      { key: "alaska", name: "Alaska" },
      { key: "arizona", name: "Arizona" },
      { key: "arkansas", name: "Arkansas" },
      { key: "california", name: "California" },
      { key: "colorado", name: "Colorado" },
      { key: "connecticut", name: "Connecticut" },
      { key: "delaware", name: "Delaware" },
      { key: "florida", name: "Florida" },
      { key: "georgia", name: "Georgia" },
      { key: "hawaii", name: "Hawaii" },
      { key: "idaho", name: "Idaho" },
      { key: "illinois", name: "Illinois" },
      { key: "indiana", name: "Indiana" },
      { key: "iowa", name: "Iowa" },
      { key: "kansas", name: "Kansas" },
      { key: "kentucky", name: "Kentucky" },
      { key: "louisiana", name: "Louisiana" },
      { key: "maine", name: "Maine" },
      { key: "maryland", name: "Maryland" },
      { key: "massachusetts", name: "Massachusetts" },
      { key: "michigan", name: "Michigan" },
      { key: "minnesota", name: "Minnesota" },
      { key: "mississippi", name: "Mississippi" },
      { key: "missouri", name: "Missouri" },
      { key: "montana", name: "Montana" },
      { key: "nebraska", name: "Nebraska" },
      { key: "nevada", name: "Nevada" },
      { key: "new_hampshire", name: "New Hampshire" },
      { key: "new_jersey", name: "New Jersey" },
      { key: "new_mexico", name: "New Mexico" },
      { key: "new_york", name: "New York" },
      { key: "north_carolina", name: "North Carolina" },
      { key: "north_dakota", name: "North Dakota" },
      { key: "ohio", name: "Ohio" },
      { key: "oklahoma", name: "Oklahoma" },
      { key: "oregon", name: "Oregon" },
      { key: "pennsylvania", name: "Pennsylvania" },
      { key: "rhode_island", name: "Rhode Island" },
      { key: "south_carolina", name: "South Carolina" },
      { key: "south_dakota", name: "South Dakota" },
      { key: "tennessee", name: "Tennessee" },
      { key: "texas", name: "Texas" },
      { key: "utah", name: "Utah" },
      { key: "vermont", name: "Vermont" },
      { key: "virginia", name: "Virginia" },
      { key: "washington", name: "Washington" },
      { key: "west_virginia", name: "West Virginia" },
      { key: "wisconsin", name: "Wisconsin" },
      { key: "wyoming", name: "Wyoming" },
    ],
  },
];
