// js file as mostly it will have plain JS
import React from 'react';

const UserContext = React.createContext() // it will create a context object

export default UserContext; // every context is a provider it will provide the data to all the components which are wrapped inside it.

/**
 every componenet inside UserContect has access to data
 * <UserContext>
 * <Card />
 * <App />
 * </UserContext>
 */