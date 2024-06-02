import React from 'react';
import { NextPage } from 'next';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const Blogs: NextPage = () => {
  return (
    <div>
            <div className="py-16 ">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="mb-12 my-6 space-y-2 text-center">
                        <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Welcome to my blogs</span>
                        <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
                        <p className="lg:w-6/12 lg:mx-auto">Welcome to my blogs.Here you can explore various expectional concept of programming and web development</p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <Image unoptimized src="https://media.geeksforgeeks.org/wp-content/uploads/20240430132028/What-is-System-Design.webp" alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-semibold text-cyan-900">What is Systems Design – Learn System Design
</h4>
                                        <p>Systems Design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It involves translating user requirements into a detailed blueprint that guides the implementation phase. The goal is to create a well-organized and efficient structure that meets the intended purpose while considering factors like scalability, maintainability, and performance.</p>
                                    </div>
                                    <Link href="/blogs" className="block w-max text-cyan-600">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <Image unoptimized src="https://media.geeksforgeeks.org/wp-content/uploads/20221117160614/systemdevelopmentinfographic1.png" alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-semibold text-cyan-900">Why learn System Design?</h4>
                                        <p className="text-gray-600">In any development process, be it Software or any other tech, the most important stage is Design. Without the designing phase, you cannot jump to the implementation or the testing part. The same is the case with the System as well.

Systems Design not only is a vital step in the development of the system but also provides the backbone to handle exceptional scenarios because it represents the business logic of software. 

</p>
                                    </div>
                                    <Link href="/blogs" className="block w-max text-cyan-600">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12 space-y-2 text-center">

                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <Image unoptimized src="https://media.geeksforgeeks.org/wp-content/uploads/20230122231919/Yellow-Greyscale-Script-Landscape-Photography-Blog-Banner-(1).jpg" alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-semibold text-cyan-900">Architecture of a System</h4>
                                        <p className="text-gray-600">Architecture is a critical aspect of designing a system, as it sets the foundation for how the system will function and be built. It is the process of making high-level decisions about the organization of a system, including the selection of hardware and software components, the design of interfaces, and the overall system structure.</p>
                                    </div>
                                    <Link href="/blogs" className="block w-max text-cyan-600">Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                            <Image src="https://miro.medium.com/max/800/1*RtAQYp558yHr9UjZzDJmAg.jpeg" alt="art cover" unoptimized  loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
                            <div className="sm:w-7/12 pl-0 p-5">
                                <div className="space-y-2">
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-semibold text-cyan-900">React vs. Angular vs. Vue</h4>
                                        <p className="text-gray-600">Vue provides higher customizability and hence is easier to learn than Angular or React.Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components.Hence, the transition to Vue from either of the two is an easy option...</p>
                                    </div>
                                    <Link href="/blogs" className="block w-max text-cyan-600">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  );
};

export default Blogs;