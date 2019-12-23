import React from 'react'
import { Dropdown } from 'semantic-ui-react'

function FilterDropdown(props) {
  const cityOptions = [
    {key: "No selection", text: "No selection", value: "No selection"},
    {key:"Albany", text:"Albany", value:"Albany"}, 
    {key: "Boise", text:"Boise", value:"Boise"},
    {key: "Cincinnati", text:"Cincinnati", value:"Cincinnati"},
    {key: "Dallas", text:"Dallas", value:"Dallas"},
    {key: "Denver", text:"Denver", value:"Denver"},
    {key: "Fresno", text:"Fresno", value:"Fresno"},
    {key: "Glendale", text:"Glendale", value:"Glendale"},
    {key: "Houston", text:"Houston", value:"Houston"},
    {key: "Inglewood", text:"Inglewood", value:"Inglewood"},
    {key: "Kansas City", text:"Kansas City", value:"Kansas City"},
    {key: "Los Angeles", text:"Los Angeles", value:"Los Angeles"},
    {key: "MilWaukee", text:"MilWaukee", value:"MilWaukee"},
    {key: "Minneapolis", text:"Minneapolis", value:"Minneapolis"},
    {key: "Oakland", text:"Oakland", value:"Oakland"},
    {key: "Omaha", text:"Omaha", value:"Omaha"},
    {key: "Portland", text:"Portland", value:"Portland"},
    {key: "Rosemont", text:"Rosemont", value:"Rosemont"},
    {key: "Sacremento", text:"Sacramento", value:"Sacramento"},
    {key: "San Antonio", text:"San Antonio", value:"San Antonio"},
    {key: "San Diego", text:"San Diego", value:"San Diego"},
    {key: "San Jose", text:"San Jose", value:"San Jose"},
    {key: "Tulsa", text:"Tulsa", value:"Tulsa"}
  ]

  return(
    <Dropdown
    placeholder="Select a city"
    options={cityOptions}
    selection
    onChange={event=> props.filterHandler(event.target.textContent)}
    />
  )
}

export default FilterDropdown;