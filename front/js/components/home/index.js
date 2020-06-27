/**
 * @file Timestamp component.
*/

import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import useTimestampProvider from '../../hooks/use-timestamp-provider';

const Timestamp = (props) => {
    const [timestamp, fetchTimestamp] = useTimestampProvider();

    useEffect(() => {
        fetchTimestamp();
    }, []);

    return (
        <>
            <img src={`${props.user.profileImg}`} className="rounded-circle display-pic" alt="..."></img>
            <h2> Welcome {props.user.name}</h2>
            <Button variant="danger" onClick={props.logout}>Logout</Button>
        </>
    );
};

export default Timestamp;
