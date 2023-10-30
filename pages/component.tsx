import * as React from "react";
import {Button} from "@nextui-org/button";
import {Card, CardHeader, CardBody, Image, Tabs, Tab,} from "@nextui-org/react";
import Link from "next/link";

function BaseComponent() {
  return (
    <div className="relative mx-auto w-full max-w-container">

        <section id="cc-0002" className="mb-20 space-y-24">
          <div className="mx-auto 2xl:max-w-6xl xl:max-w-6xl lg:max-w-6xl md:max-w-3xl lg:px-8 md:px-8 xs:px-3">
            <h2 className="title xs:text-3xl xs:mb-4">Explore Now</h2>
            <div className="grid gap-5 mt-10 xs:mt-3 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">

              <Card className="bg-white">
                <div className="intersect">
                  <img src="/images/intersect-12.svg" alt="" />
                </div>
                <div className="block-top h-full flex items-center justify-around gap-17 absolute w-full">
                  <div className="left relative bg-orange-100 p-2 rounded-full">
                    <img src="/images/top-up-1-1-1.svg" alt="" />
                  </div>
                  <div className="right flex items-center gap-1">
                    <Link href={'/'} className="font-bold">Top Up</Link>
                    <Link href={'/'} className="font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
              <Card className="bg-white">
                <div className="intersect">
                  <img src="/images/intersect-12.svg" alt="" />
                </div>
                <div className="block-top h-full flex items-center justify-around gap-17 absolute w-full">
                  <div className="left relative bg-orange-100 p-2 rounded-full">
                    <img src="/images/top-up-1-1-1.svg" alt="" />
                  </div>
                  <div className="right flex items-center gap-1">
                    <Link href={'/'} className="font-bold">Top Up</Link>
                    <Link href={'/'} className="font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
              <Card className="bg-white">
                <div className="intersect">
                  <img src="/images/intersect-12.svg" alt="" />
                </div>
                <div className="block-top h-full flex items-center justify-around gap-17 absolute w-full">
                  <div className="left relative bg-orange-100 p-2 rounded-full">
                    <img src="/images/top-up-1-1-1.svg" alt="" />
                  </div>
                  <div className="right flex items-center gap-1">
                    <Link href={'/'} className="font-bold">Top Up</Link>
                    <Link href={'/'} className="font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
              <Card className="bg-white">
                <div className="intersect">
                  <img src="/images/intersect-12.svg" alt="" />
                </div>
                <div className="block-top h-full flex items-center justify-around gap-17 absolute w-full">
                  <div className="left relative bg-orange-100 p-2 rounded-full">
                    <img src="/images/top-up-1-1-1.svg" alt="" />
                  </div>
                  <div className="right flex items-center gap-1">
                    <Link href={'/'} className="font-bold">Top Up</Link>
                    <Link href={'/'} className="font-bold">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
              
            </div>
          </div>
        </section>

        <section id="cc-0003" className="mb-10 space-y-24">
          <div className="container mx-auto lg:px-8">
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 md:px-8">
              <div className="bg-[url('https://placehold.co/1440x540')] bg-center bg-cover bg-no-repeat w-full h-[540px] md:h-[420px] xs:h-[290px]">

                <div className="mx-auto 2xl:max-w-6xl xl:max-w-6xl lg:max-w-6xl pt-16 pb-24 lg:p-6 md:p-6 xs:p-4 detail">
                  <h2 className="title xs:text-3xl mb-3">Personal</h2>
                  <div className="description mb-5">
                    We’re here to be your telecom provider today, tomorrow, and beyond. Telecom made simple with Cellcard
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={'/'}>Learn More</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

                <div className="mx-auto max-w-6xl flex w-full md:max-w-6xl flex-col xs:px-3">
                  <Tabs color="warning" key="underlined" variant="underlined" aria-label="Tabs variants" className="tab">
                    <Tab key="corporate-plans" title="Corporate Palns" className="mb-8">
                      <div className="grid gap-5 grid-cols-3 xs:grid-cols-1">

                        <Card className="card">
                          <div className="top relative">
                            <img src="/images/intersect-3.svg" className="w-full" alt=""/>
                            <div className="left absolute top-2-5 left-6 bg-orange-100 p-2 rounded-full w-fit">
                              <img src="/images/website-1-1.svg" alt="" />
                            </div>
                          </div>
                          <div className="bottom detail pt-14 pb-20 px-6">
                            <h4 className="title mb-2">DATA Serey</h4>
                            <div className="short-descriptiop">Mobile Data Plan</div>
                          </div>
                        </Card>
                        <Card className="card">
                          <div className="top relative">
                            <img src="/images/intersect-3.svg" className="w-full" alt=""/>
                            <div className="left absolute top-2-5 left-6 bg-orange-100 p-2 rounded-full w-fit">
                              <img src="/images/website-1-1.svg" alt="" />
                            </div>
                          </div>
                          <div className="bottom detail pt-14 pb-20 px-6">
                            <h4 className="title mb-2">DATA Serey</h4>
                            <div className="short-descriptiop">Mobile Data Plan</div>
                          </div>
                        </Card>
                        <Card className="card">
                          <div className="top relative">
                            <img src="/images/intersect-3.svg" className="w-full" alt=""/>
                            <div className="left absolute top-2-5 left-6 bg-orange-100 p-2 rounded-full w-fit">
                              <img src="/images/website-1-1.svg" alt="" />
                            </div>
                          </div>
                          <div className="bottom detail pt-14 pb-20 px-6">
                            <h4 className="title mb-2">DATA Serey</h4>
                            <div className="short-descriptiop">Mobile Data Plan</div>
                          </div>
                        </Card>

                      </div>
                    </Tab>
                    <Tab key="business-solution" title="business Solution" className="mb-8">
                      <div className="grid gap-5 grid-cols-3 xs:grid-cols-1">

                        <Card className="card">
                          <div className="top relative">
                            <img src="/images/intersect-3.svg" className="w-full" alt=""/>
                            <div className="left absolute top-2-5 left-6 bg-orange-100 p-2 rounded-full w-fit">
                              <img src="/images/website-1-1.svg" alt="" />
                            </div>
                          </div>
                          <div className="bottom detail pt-14 pb-20 px-6">
                            <h4 className="title mb-2">DATA Serey</h4>
                            <div className="short-descriptiop">Mobile Data Plan</div>
                          </div>
                        </Card>
                        <Card className="card">
                          <div className="top relative">
                            <img src="/images/intersect-3.svg" className="w-full" alt=""/>
                            <div className="left absolute top-2-5 left-6 bg-orange-100 p-2 rounded-full w-fit">
                              <img src="/images/website-1-1.svg" alt="" />
                            </div>
                          </div>
                          <div className="bottom detail pt-14 pb-20 px-6">
                            <h4 className="title mb-2">DATA Serey</h4>
                            <div className="short-descriptiop">Mobile Data Plan</div>
                          </div>
                        </Card>
                        <Card className="card">
                          <div className="top relative">
                            <img src="/images/intersect-3.svg" className="w-full" alt=""/>
                            <div className="left absolute top-2-5 left-6 bg-orange-100 p-2 rounded-full w-fit">
                              <img src="/images/website-1-1.svg" alt="" />
                            </div>
                          </div>
                          <div className="bottom detail pt-14 pb-20 px-6">
                            <h4 className="title mb-2">DATA Serey</h4>
                            <div className="short-descriptiop">Mobile Data Plan</div>
                          </div>
                        </Card>

                      </div>
                    </Tab>
                  </Tabs>
                </div>  
                
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default BaseComponent