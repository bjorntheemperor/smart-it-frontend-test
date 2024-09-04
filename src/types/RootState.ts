import {UserState} from "./User";
import {FilterDataType} from "./FilterData";

export interface RootState {
    users: UserState;
    filter: FilterDataType;
}