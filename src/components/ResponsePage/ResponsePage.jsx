import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function ResponsePage() {

const dispatch = useDispatch();
const history = useHistory();
const user = useSelector((store) => store.user);
const cards = useSelector((store) => store.cardReducer);

const home = () => {
    history.push('/')
}

    return (
        <div className="container">
            <div>
                <p>placeholder for responses</p>
            </div>
        </div>
        );
}

export default ResponsePage;
