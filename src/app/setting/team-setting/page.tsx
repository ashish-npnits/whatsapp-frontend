import React from 'react';
import Layout from '../setting-component/Layout';
import { Button, Flex, Heading, Table } from '@radix-ui/themes';
import SettingSidebar from '../setting-component/SettingSidebar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
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
              <GroupsOutlinedIcon />
            </span>
            <Heading as="h2">Team Setting</Heading>
          </Flex>
          <Button color="green" size="2" >
              <PlusIcon size="16"/>  Add Member
            </Button>
          </Flex>

          <span className="gray-500 font-light">Invite and manage your teammates.</span>

          <Table.Root className='mt-8'>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Member</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Created By</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Contact</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Last Logged In</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Ashish Vishwakarma</Table.RowHeaderCell>
                <Table.Cell>Ashish Vishwakarma</Table.Cell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>7000057317</Table.Cell>
                <Table.Cell>23/10/2023</Table.Cell>
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
