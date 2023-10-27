import * as React from "react";
import {Button} from "@nextui-org/button";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";


function App() {
  return (
    <section className="mb-5">
      <div className="container pt-6 mx-auto">
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">

          <Card className="p-2 border-2 bg-gray-200 shadow-sm">          
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-1 w-full object-cover hover:rotate-3"
                src="https://placehold.co/370"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold ">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large lg:text-red-500 md:text-blue-400 sm:text-green-400">Frontend Radio</h4>
            </CardHeader>
          </Card>
          <Card className="p-2 border-2 bg-gray-200">          
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-1 w-full object-cover"
                src="https://placehold.co/370"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold ">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large lg:text-red-500 md:text-blue-400 sm:text-green-400">Frontend Radio</h4>
            </CardHeader>
          </Card>
          <Card className="p-2 border-2 bg-gray-200">          
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-1 w-full object-cover"
                src="https://placehold.co/370"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold ">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large lg:text-red-500 md:text-blue-400 sm:text-green-400">Frontend Radio</h4>
            </CardHeader>
          </Card>
          <Card className="p-2 border-2 bg-gray-200">          
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-1 w-full object-cover"
                src="https://placehold.co/370"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold ">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large lg:text-red-500 md:text-blue-400 sm:text-green-400">Frontend Radio</h4>
            </CardHeader>
          </Card>
          <Card className="p-2 border-2 bg-gray-200">          
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-1 w-full object-cover"
                src="https://placehold.co/370"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold ">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large lg:text-red-500 md:text-blue-400 sm:text-green-400">Frontend Radio</h4>
            </CardHeader>
          </Card>
          <Card className="p-2 border-2 bg-gray-200">          
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-1 w-full object-cover"
                src="https://placehold.co/370"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold ">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large lg:text-red-500 md:text-blue-400 sm:text-green-400">Frontend Radio</h4>
            </CardHeader>
          </Card>
          <Card className="p-2 border-2 bg-gray-200">          
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-1 w-full object-cover"
                src="https://placehold.co/370"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold ">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large lg:text-red-500 md:text-blue-400 sm:text-green-400">Frontend Radio</h4>
            </CardHeader>
          </Card>
          <Card className="p-2 border-2 bg-gray-200">          
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl opacity-1 w-full object-cover"
                src="https://placehold.co/370"
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold ">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="font-bold text-large lg:text-red-500 md:text-blue-400 sm:text-green-400">Frontend Radio</h4>
            </CardHeader>
          </Card>

        </div>
        <div className="flex justify-center">
          <Button className="m-8 text-white bg-gray-500 w-40 p-6">
            Load More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </Button>
        </div>
      </div>
    </section>
  );
}

export default App