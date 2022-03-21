import React from 'react';
export default function Jsonplaceholder() {
    return (
        <div>
            <h1>Powered By <span className="text-primary">React<i class="fa-brands fa-react"></i></span></h1>
            <h1 className="text-success">JSON Placeholder</h1>
            <h3>
                Free fake API for testing and prototyping.
                Powered by JSON Server + LowDB. Tested with XV.
            </h3>
            <h5>As of Oct 2021, serving ~1.7 billion requests each month.</h5>
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response  response.json())
            .then(json  console.log(json))
        </div>
    )
}