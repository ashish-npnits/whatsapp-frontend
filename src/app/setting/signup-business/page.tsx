'use client';
import React from 'react';
import Layout from '../setting-component/Layout';
import { Button, DropdownMenu, Flex, Heading, RadioGroup, TextArea, TextField, Text } from '@radix-ui/themes';
import SettingSidebar from '../setting-component/SettingSidebar';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import CustomAccordion from '@/app/global-component/CustomAccordion';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Image from 'next/image';
import { CaretDownIcon } from '@radix-ui/react-icons';

const page = () => {
  return (
    <Layout>
      <Flex>
        <SettingSidebar />
        <div className='overflow-auto h-screen'>
        <Flex >
          
          <div className="ml-4 p-4 mt-12 h-fit w-3/5 mr-3">
            <Flex gap="3" className="align-middle">
              <span className="p-1">
                <QuestionAnswerOutlinedIcon />
              </span>
              <Heading as="h2">Your Business Account Appearance</Heading>
            </Flex>

            <span className="gray-500 font-light">
              Easily configure vour WhatsApp Business Profile appearance. (Note: WhatsAnd Business number and displav
              name can not be chanded once approved).
            </span>

            <div className="mt-8">
              <CustomAccordion
                heading={
                  <>
                    <h5 className="text-md font-semibold">Business Logo</h5>
                    <span className="gray-500 font-light text-sm">
                      Logo will appear as the profile picture for vour business.
                    </span>
                  </>
                }
              >
                <div>
                  <h5 className="text-md font-semibold">Upload your logo</h5>
                  <div className="gray-500 font-light text-sm">
                    Square image with max edge of 640px and max size 5mp is recommended Images with a height or width
                    less than 192px may cause issues when resizing occurs
                  </div>
                  <div className="mt-4">
                    <Button color="green" size="2">
                      Add Reply <CloudUploadOutlinedIcon />
                    </Button>
                  </div>
                </div>
              </CustomAccordion>
            </div>

            <div className="mt-8">
              <CustomAccordion
                heading={
                  <>
                    <h5 className="text-md font-semibold">Description</h5>
                    <span className="gray-500 font-light text-sm">Add description for your business.</span>
                  </>
                }
              >
                <div>
                  <h5 className="text-md font-semibold">Your Business Bio</h5>
                  <div className="gray-500 font-light text-sm">
                    Introduce your business and tell customers how you can help.
                  </div>
                  <div className="mt-4">
                    <TextArea size="3" placeholder="" />
                  </div>
                  <h5 className="text-md font-semibold mt-4">Category</h5>
                  <div className="gray-500 font-light text-sm">Pick one the category for your business.</div>

                  <div>
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger>
                        <Button color="green" size="2" variant="outline">
                          Options
                          <CaretDownIcon width="12" height="12" />
                        </Button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content variant="soft" color="indigo">
                        <DropdownMenu.Item>Edit</DropdownMenu.Item>
                        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>Archive</DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                  </div>
                </div>
              </CustomAccordion>
            </div>

            <div className="mt-8">
              <CustomAccordion
                heading={
                  <>
                    <h5 className="text-md font-semibold">Contact Information</h5>
                    <span className="gray-500 font-light text-sm">
                      Add vour contact information for your WhatsApp profile.
                    </span>
                  </>
                }
              >
                <div>
                  <h5 className="text-md font-semibold">Your Business Address</h5>
                  <div className="mt-4">
                    <TextArea size="3" placeholder="" />
                  </div>

                  <h5 className="text-md font-semibold">Your Business Email Address</h5>
                  <div className="mt-4">
                    <TextField.Input size="3" placeholder="john.doe@gmail.com" />
                  </div>

                  <h5 className="text-md font-semibold">Your Business Website</h5>
                  <div className="mt-4">
                    <TextField.Input size="3" placeholder="www.npnits.com" />
                  </div>
                </div>
              </CustomAccordion>
            </div>

            <div className="mt-8">
              <CustomAccordion
                heading={
                  <>
                    <h5 className="text-md font-semibold">Provide Complience Info</h5>
                    <span className="gray-500 font-light text-sm">
                      Mandatory for sending catalog messages. Please fill all fields.
                    </span>
                  </>
                }
              >
                <div>
                  <h5 className="text-md font-semibold">Legal name of Business</h5>
                  <div className="mt-2">
                    <TextField.Input size="2" placeholder="Enter Full Legal Name" />
                  </div>

                  <div className='mt-2'>
                  <h5 className="text-md font-semibold">Business Type</h5>
                  <div className="mt-2">
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button color="green" size="2" variant="outline">
                        Options
                        <CaretDownIcon width="12" height="12" />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content variant="soft" color="indigo">
                      <DropdownMenu.Item>Edit</DropdownMenu.Item>
                      <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item>Archive</DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                  </div>
                </div>
                <div className='mt-4'>
                  <h5 className="text-md font-semibold">Is your business registered?</h5>
                  <div className="mt-3">
                  <RadioGroup.Root variant="surface" defaultValue="1">
                    <Flex gap="2" direction="row">
                      <label>
                        <Flex gap="2" align="center">
                          <RadioGroup.Item value="1" />
                          <Text size="2">Yes</Text>
                        </Flex>
                      </label>
                      <label>
                        <Flex gap="2" align="center">
                          <RadioGroup.Item value="2" />
                          <Text size="2">No</Text>
                        </Flex>
                      </label>
                    </Flex>
                  </RadioGroup.Root>
                  </div>
                </div>
                <div className='mt-4'>
                  <h5 className="text-md font-semibold">Customer Care Information</h5>
                  <div className="mt-3">
                  <div className="gray-500 font-light text-xs mb-2">Enter the contact information of the individual who will resnond to and resolve the inquiries from vour customers such as returns or refunds</div>
                  <Flex gap="2" direction="row">
                  <TextField.Input size="2" placeholder="Email ID" />
                  <TextField.Input size="2" placeholder="Mobile Number" />
                  </Flex>
                  </div>
                </div>
                <div className='mt-4'>
                  <h5 className="text-md font-semibold">Grievance Officer Information</h5>
                  <div className="mt-3">
                  <div className="gray-500 font-light text-xs mb-2">Enter the contact information of the individual who will resnond to and resolve any complaints from your customers</div>
                  <TextField.Input size="2" placeholder="Officer Name" />
                  </div>
                </div>
                <div className='mt-4'>
                  <h5 className="text-md font-semibold">Contact Info</h5>
                  <div className="mt-3">
                  <Flex gap="2" direction="row">
                  <TextField.Input size="2" placeholder="Email ID" />
                  <TextField.Input size="2" placeholder="Mobile Number" />
                  </Flex>
                  </div>
                </div>
                </div>
              </CustomAccordion>
            </div>
          </div>
          <div className="w-2/5 flex flex-row items-center">
            <div className="m-auto">
              <Image
                src="/asset/images/whatsapp-business-map-image.png"
                alt="Next.js Logo"
                width={400}
                height={37}
                priority
              />
            </div>
          </div>
        </Flex>
        </div>
      </Flex>
    </Layout>
  );
};

export default page;
