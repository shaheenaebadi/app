'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const EmployeePage = () => {
  // Sample employee data - replace with your actual data
  const [employees] = useState([
    {
      id: 1,
      name: 'Mohammad Rahman',
      position: 'Administrative Officer',
      department: 'Administration',
      email: 'rahman@kaliakair.gov.bd',
      phone: '+880 1700-000001'
    },
    {
      id: 2,
      name: 'Fatima Begum',
      position: 'Finance Officer',
      department: 'Finance',
      email: 'fatima@kaliakair.gov.bd',
      phone: '+880 1700-000002'
    },
    {
      id: 3,
      name: 'Abdul Karim',
      position: 'Engineering Officer',
      department: 'Engineering',
      email: 'karim@kaliakair.gov.bd',
      phone: '+880 1700-000003'
    },
    // Add more employees as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  // Filter employees based on search term
  const filteredEmployees = employees.filter(employee =>
    Object.values(employee).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort employees
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  // Handle sort
  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Render sort indicator
  const SortIndicator = ({ field }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? 
      <ChevronUp className="w-4 h-4 inline" /> : 
      <ChevronDown className="w-4 h-4 inline" />;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Employee Directory</h1>
          <p className="mt-2 text-gray-600">Browse and search for municipality employees</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Employee Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {['name', 'position', 'department', 'email', 'phone'].map((field) => (
                    <th
                      key={field}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort(field)}
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                      <SortIndicator field={field} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{employee.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{employee.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-blue-600 hover:text-blue-800">
                        <a href={`mailto:${employee.email}`}>{employee.email}</a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{employee.phone}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No Results Message */}
        {sortedEmployees.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No employees found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeePage;