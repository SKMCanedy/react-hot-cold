import React from "react";
import {shallow, mount} from "enzyme";

import GuessList from "./guess-list";

describe ("<GuessList />", ()=>{
    it ("Renders without crashing", ()=>{
        const guessArray=[5,15,23]
        shallow(<GuessList guesses={guessArray} />)
    })
})