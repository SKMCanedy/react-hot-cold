import React from "react";
import {shallow,mount} from "enzyme";
import GuessCount from "./guess-count";

describe ("<GuessCount />", ()=>{
    it ("Renders without crashing", ()=>{
        shallow(<GuessCount />);
    });

    it("Returns singular guess statement when only 1 guess has been submitted", ()=>{
        const testCount = 1;
        const wrapper = shallow(<GuessCount guessCount={testCount}/>);
        expect(wrapper.text()).toEqual("You've made 1 guess!");
    });
})

