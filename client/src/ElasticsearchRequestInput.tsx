import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ElasticsearchRequestInput: React.FC = () => {
    const [input, setInput] = useState('');

    // Toast Notification on Error
    const notify = () => toast.error('Invalid JSON Input', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
    });

    const sendRequest = async () => {
        try{
        const parsedInput = JSON.parse(input); // This will throw an error if the input is not valid JSON
            const response = await axios.post('http://localhost:9200/_search', parsedInput);
            console.log(response.data);
        } catch (error) {
            console.log(error);
            notify();
        }
    };

    return (
        <div>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter your Elasticsearch request here'
            />
            <button onClick={sendRequest}>Send Request</button>
        </div>
    );
};

export default ElasticsearchRequestInput;