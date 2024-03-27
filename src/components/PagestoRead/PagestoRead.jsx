import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { getLocalStoreItem } from "../Utility/Utility";

const PagestoRead = () => {

    const getReadBooksData = getLocalStoreItem();

    return (
        <div className='container mx-auto mt-32 '>

            <div className=''>

                <BarChart
                    width={1200}
                    height={575}
                    data={getReadBooksData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalPages" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                </BarChart>

            </div>
            
        </div>
    );
};

export default PagestoRead;