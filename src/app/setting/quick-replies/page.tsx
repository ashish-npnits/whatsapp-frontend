import React from 'react';
import Layout from '../setting-component/Layout';
import { Avatar, Button, Flex, Heading, Table } from '@radix-ui/themes';
import SettingSidebar from '../setting-component/SettingSidebar';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { PlusIcon } from 'lucide-react';

const page = () => {
  return (
    <Layout>
      <Flex>
        <SettingSidebar />
        <div className="ml-4 p-4 mt-12 h-fit w-full mr-3">
        <Flex justify="between">
          <Flex gap="3" className="align-middle">
            <span className="p-1">
              <QuestionAnswerOutlinedIcon />
            </span>
            <Heading as="h2">Quick Replies</Heading>
          </Flex>
          <Button color="green" size="2" >
              <PlusIcon size="16"/>  Add Reply
            </Button>
          </Flex>

          <span className="gray-500 font-light">Create quick replies to reuse frequently sent messages.</span>

          <Table.Root className='mt-8'>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Created By</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Created On</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Message</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>09/01/2023 10:30 AM</Table.Cell>
                <Table.Cell>Hello ([Name]), we're now on WhatsApp!
                    We're alwavs looking to deliver the best to our customers
                    Actions
                    Access Permissions
                    This is our official WhatsApp number and we're thrilled to get in touch with you here.
                    Manage Whatsapp
                    Profile
                    We'll be sending you timely updates on Whatsapp and connecting with you in real-time to help you experience convenience like never before!
                </Table.Cell>
                <Table.Cell>
                    <Flex gap="3">
                        <EditOutlinedIcon sx={{ fontSize: 16 }} />
                        <DeleteOutlinedIcon sx={{ fontSize: 16 }} />
                    </Flex>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </Flex>
    </Layout>
  );
};

export default page;
