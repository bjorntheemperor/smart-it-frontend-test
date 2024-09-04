import React from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import Table from "./components/Table";
import Title from "./components/Title";

const App:React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Title>User management table</Title>
            <Table />
        </>
    );
}

export default App;
