import React from 'react';
import { Dropdown } from "@nextui-org/react";

export const ContinueWatching = () => {
    return (
        <section className='text-white  h-full w-10/12 float-right'>
            <div className='ml-20 flex justify-around' >
                <h2 className='text-2xl font-bold' >Continue Watching</h2>
                <h2 className='text-2xl font-bold' >Continue Watching</h2>
                <div>
                    <Dropdown color="default" light>
                        <Dropdown.Button flat>Popular</Dropdown.Button>
                        <Dropdown.Menu aria-label="Static Actions">
                            <Dropdown.Item key="new">New file</Dropdown.Item>
                            <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                            <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                            <Dropdown.Item key="delete" color="error">
                                Delete file
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </section>
    )
}
