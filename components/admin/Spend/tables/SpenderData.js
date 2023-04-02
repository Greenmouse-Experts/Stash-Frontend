import React from 'react'

const SpendersDataTable = () => {
  return (
    <div>
        <div className="flex flex-col w-full">
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead className="font-medium">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-gray-400">S/N</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Name</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Email</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Amount</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Type</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Status</th>
                                <th scope="col" className="px-6 py-4 text-gray-400">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">40,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Airtime</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-4 py-1 rounded-md bg-red-50 border border-red-400 text-red-400'>Failed</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">10,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Airtime</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-2 py-1 rounded-md bg-green-50 border border-green-400 text-green-400'>Success</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">4,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Bills</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-4 py-1 rounded-md bg-red-50 border border-red-400 text-red-400'>Failed</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">5,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Transfer</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-4 py-1 rounded-md border bg-red-50 border-red-400 text-red-400'>Failed</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">5</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">1,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Airtime</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-2 py-1 rounded-md bg-green-50 border border-green-400 text-green-400'>Success</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">6</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">14,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Data</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-2 py-1 bg-yellow-50 rounded-md border border-yellow-500 text-yellow-500'>Pending</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">7</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">40,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Data</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-4 py-1 bg-red-50 rounded-md border border-red-400 text-red-400'>Failed</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">8</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">10,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Transfer</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-2 py-1 bg-green-50 rounded-md border border-green-400 text-green-500'>Success</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">9</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">10,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Data</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-2 py-1 rounded-md bg-yellow-50 border border-yellow-500 text-yellow-500'>Pending</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                            <tr className="font-medium">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">10</td>
                                <td className="whitespace-nowrap px-6 py-4">Odinchazoihe Kayode</td>
                                <td className="whitespace-nowrap px-6 py-4">michealscofield@gmail.com</td>
                                <td className="whitespace-nowrap px-6 py-4">1,000</td>
                                <td className="whitespace-nowrap px-6 py-4">Bills</td>
                                <td className="whitespace-nowrap px-6 py-4"><span className='px-4 py-1 rounded-md bg-red-50 border border-red-400 text-red-400'>Failed</span></td>
                                <td className="whitespace-nowrap px-6 py-4">Mar 02, 23 - 9:22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpendersDataTable