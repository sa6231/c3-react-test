import React from "react";
import { shallow } from "enzyme";

import PearsonUsers from "./PearsonUsers";
import {PearsonUser} from '../../Container/PearsonUser/PearsonUser'
import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

import {mockApiUsers} from '../../Utility/Mock/Mock'

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it("Task 1 : Renders 3 Pearson user from initial state", () => {
    expect(component.find('.users-list').children().length).toEqual(3);
  });

  it("Task 3 : Remove duplicated users from the state", () => {
    const users = component.state().users;
    users.push(mockApiUsers.find(x=>x.id===4));
    component.instance().deleteDuplicateUser(users);
    expect(component.state().users.length).toEqual(3);
  });

  it("Task 4 : Delete a user from the state", () => {
    const userCount = component.find('.users-list').children().length;
    component.instance().deleteUser(4);
    expect(component.find('.users-list').children().length).toEqual(userCount-1);
  });

  it("Task 5 : New component to render each user profile", () => {
    component.setState({users:mockApiUsers});
    expect(component.find(PearsonUser).length).toEqual(10);
  });
  
});
