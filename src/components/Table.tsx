import styled from "styled-components";
import {useEffect, useState} from "react";
import {User} from "../types/User";
import SearchInput from "./SearchInput";
import {getUsers} from '../store/userSlice';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store";
import {FilterDataType} from "../types/FilterData";
import {setFilter} from "../store/filterSlice";
import {RootState} from "../types/RootState";

type Props = {};

const Wrapper = styled.div`
    margin: 30px 0;
`

const Container = styled.div`
    max-width: 1430px;
    padding: 0 15px;
    margin: 0 auto;
`

const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;

    scrollbar-width: thin;
    scrollbar-color: #00A86B #ffffff;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #00A86B;
        border-radius: 3em;
        border: 3px solid #ffffff;
    }
`

const StyledTable = styled.table`
    width: 100%;
    margin-top: 30px;
    border-collapse: collapse;
    font-size: 16px;

    thead{
        border: 1px solid #1c1c1c;
    }
    
    th, td {

    }

    th {
        padding: 16px 8px;
        background-color: #00A86B;
        color: white;
        text-transform: uppercase;
        font-size: 1.25em;
        letter-spacing: .1em;
    }

    td {
        padding: 12px 8px;
        font-size: 1.2em;
        border: 1px solid #1c1c1c;
    
        &.search-wrap{
            padding-left: 8px;
            padding-right: 8px;
        }
    }

    tr {
        &:nth-child(even) {
            background-color: #00A86B54;
        }
    }
    
    @media screen and (max-width: 1200px){
        font-size: 14px;
        th{
            padding: 8px 4px;
            letter-spacing: .05em;
        }
        td{
            padding: 8px 4px;
            
        }
    }
    @media screen and (max-width: 960px){
        min-width: 930px;
    }
`


const Table = (props: Props) => {

    const dispatch = useDispatch<AppDispatch>();

    const users = useSelector((state: RootState) => state.users.users)

    const [filteredUsers, setFilteredUsers] = useState<User[]>([])

    const filterData = useSelector((state: RootState) => state.filter)

    const [loading, setLoading] = useState<boolean>(false)


    const handleFilters = (key: string, value: string) => {
        dispatch(setFilter({ [key]: value }))
    }

    const filterUsers = () => {
        let tempF = users; // create temporary variable of Array of User type

        for (let loop_key in filterData) { // go through all filter keys and filter with every each of them using same var.
            tempF = tempF.filter((user: User) => user[loop_key as keyof User]
                .toString()
                .toLowerCase()
                .includes(filterData[loop_key as keyof FilterDataType].toLowerCase()));
        }

        setFilteredUsers(tempF)
    }

    useEffect(() => {
        filterUsers()
    }, [filterData]);

    useEffect(() => {
        setFilteredUsers(users)
    }, [users]);

    useEffect(() => {
        setLoading(true)
        dispatch(getUsers());
        setLoading(false)
    }, []);

    return (
        <Wrapper>

            <Container>

                <TableWrapper>

                    <StyledTable>

                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone number</th>
                        </tr>

                        </thead>


                        <tbody>

                        <tr>
                            <td className={'search-wrap'}>
                                <SearchInput value={filterData.name} placeholder={'Search by Name'} onChange={(val) => handleFilters('name', val)} />
                            </td>
                            <td className={'search-wrap'}>
                                <SearchInput value={filterData.username} placeholder={'Search by Username'} onChange={(val) => handleFilters('username', val)} />
                            </td>
                            <td className={'search-wrap'}>
                                <SearchInput value={filterData.email} placeholder={'Search by Email'} onChange={(val) => handleFilters('email', val)} />
                            </td>
                            <td className={'search-wrap'}>
                                <SearchInput value={filterData.phone} placeholder={'Search by Phone'} onChange={(val) => handleFilters('phone', val)} />
                            </td>
                        </tr>

                        {
                            loading ? (
                                <tr><td>loading...</td></tr>
                            ) : (
                                filteredUsers.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                        </tr>
                                    )
                                })
                            )
                        }
                        </tbody>


                    </StyledTable>

                </TableWrapper>

            </Container>


        </Wrapper>
    );
};

export default Table