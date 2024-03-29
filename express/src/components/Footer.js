import {fetchCleared} from "../dataBase/toolkitSlice";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from 'react';
import {NavLink} from "react-router-dom";

export function Footer() {
    const dispatch = useDispatch()
    const listLength = useSelector(state => state.toolkit.list.length)
    const doneTodosAmount = useSelector(state => state.toolkit.list.filter(item => item.isDone === true).length)

    const clearHandler = useCallback(
        () => {
            dispatch(fetchCleared())
        }
    , [])

    return(
        <footer className="footer">
            <span className="todo-count"><strong>{listLength - doneTodosAmount}</strong> item left</span>
            <ul className="filters">
                <li>
                    <NavLink exact to="/" activeClassName="selected" >All</NavLink>
                </li>
                <li>
                    <NavLink to="/active" activeClassName='selected' >Active</NavLink>
                </li>
                <li>
                    <NavLink to="/completed" activeClassName='selected' >Completed</NavLink>
                </li>
            </ul>
            {doneTodosAmount ? <button className="clear-completed" onClick = {clearHandler}>Clear completed</button> : <></>}
        </footer>
    )

}