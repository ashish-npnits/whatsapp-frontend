import React from 'react';
import Layout from '../setting-component/Layout';
import { Avatar, Flex } from '@radix-ui/themes';
import SettingSidebar from '../setting-component/SettingSidebar';

const page = () => {
  return (
    <Layout>
      <Flex>
      <SettingSidebar />
        <div className="ml-4 p-4 mt-12 border border-gray-200 border-solid rounded-lg dark:border-gray-700 h-fit w-full mr-3">
          <Flex gap="6">
            <div>
              <Avatar radius="full" color='green' fallback="A" />
            </div>
            <Flex gap="8">Ashish Kumar Vishwakrma</Flex>
          </Flex>
          <Flex gap="3" className="mt-4">
            <strong>Contact</strong> <span>7000057317</span>
          </Flex>
          <Flex gap="6">
            <strong>Email</strong> <span>ashish@npnits.com</span>
          </Flex>
        </div>
      </Flex>
    </Layout>
  );
};

export default page;
