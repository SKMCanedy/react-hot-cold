import React from "react";
import {shallow,mount} from "enzyme";

import Feedback from "./feedback.js"

describe("<Feedback />", ()=>{
    it("Renders without crashing", ()=>{
        shallow(<Feedback />)
    });

    it("Returns proper feedback when guess is not correct", ()=>{
        const testKey = 1;
        const wrapper = shallow(<Feedback key={testKey}/>);
        expect(wrapper.text()).toEqual(" Guess again!");
    });
})