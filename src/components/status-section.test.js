import React from "react";
import {shallow,mount} from "enzyme";

import StatusSection from "./status-section"

describe("<StatusSection />", ()=>{
    it("Renders without crashing", ()=>{
        const guessArray=[5,15,23]
        shallow(<StatusSection guesses={guessArray} /> )
    })
})