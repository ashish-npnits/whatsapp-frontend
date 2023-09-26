'use client';
import React from 'react';
import Layout from '../setting-component/Layout';
import { Button, Flex, Heading, TextField } from '@radix-ui/themes';
import SettingSidebar from '../setting-component/SettingSidebar';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const page = () => {
  return (
    <Layout>
      <Flex>
        <SettingSidebar />
        <div className="ml-4 p-4 mt-12 h-fit w-full mr-3">
          <Flex gap="3" className="align-middle">
            <span className="p-1">
              <EngineeringOutlinedIcon />
            </span>
            <Heading as="h2">Developer Settings</Heading>
          </Flex>

          <p className="gray-500 font-light text-sm">
            Here's everything you need to start connecting your application.
          </p>

          <div className="mt-10">
            <h4 className="font-medium">API Documentation </h4>
            <p className="gray-500 font-light text-sm">
              Use our API Documentation to start understanding our API capabilities.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="font-medium">Postman Collection </h4>
            <p className="gray-500 font-light text-sm">Start playing with our APIs using our Postman Collections.</p>
          </div>

          <div className="mt-10">
            <h4 className="font-medium">Python SDK </h4>
            <Flex>
              <label className="relative inline-flex items-center cursor-pointer mt-2">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                <span className="ml-3 text-sm font-light text-gray-900 dark:text-gray-300">
                  Return an error if the Message Send API is called for an opted-out user.
                </span>
              </label>
            </Flex>
          </div>
          <div className="mt-10">
            <h4 className="font-medium">Secret Key</h4>
            <p className="gray-500 font-light text-sm">This is your API key to be passed in your API request.</p>
            <Flex gap="3" className="mt-2">
              <TextField.Root>
                <TextField.Input
                  size="2"
                  style={{ width: '300px' }}
                  type="password"
                  name="password"
                  defaultValue="qwrewqe515816ghshd7623jajshd"
                />
                <TextField.Slot>
                  <RemoveRedEyeOutlinedIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
              <Button color="green" size="2">
                
                Copy Secret
              </Button>
            </Flex>
          </div>

          <div className="mt-10">
            <h4 className="font-medium">Configure Webhook</h4>
            <p className="gray-500 font-light text-sm">get webhooks for customer messages & deliverv status of template messages.</p>
          </div>

          <div className='mt-4'>
            <Button color="green" size="2" >
                Configure
            </Button>
          </div>
        </div>
      </Flex>
    </Layout>
  );
};

export default page;
