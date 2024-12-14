'use client';

import React from 'react';
import { FileDown } from 'lucide-react';

const FormsPage = () => {
  const forms = [
    {
      id: 'vaccination-registration-form',
      title: 'Vaccination Registration Form',
      description: 'Official form for registering for vaccination services. This form is required for all residents seeking to receive vaccinations through municipal healthcare facilities. Please fill out all personal and medical history information accurately.',
      downloadUrl: '#'
    },
    {
      id: 'vaccination-certificate-request',
      title: 'Vaccination Certificate Request',
      description: 'Request form for obtaining official vaccination certificates. Use this form to get documentation of your vaccination history. Essential for school enrollment, travel, and employment purposes.',
      downloadUrl: '#'
    },
    {
      id: 'building-permission-form',
      title: 'Building Permission Form',
      description: 'Mandatory form for obtaining building construction permits. Includes sections for property details, construction plans, and environmental impact assessment. Must be submitted with architectural drawings.',
      downloadUrl: '#'
    },
    {
      id: 'land-use-change-application',
      title: 'Land Use Change Application',
      description: 'Application for changing the designated use of land property. Required for converting residential property to commercial use or vice versa. Includes zoning compliance requirements.',
      downloadUrl: '#'
    },
    {
      id: 'birth-registration-form',
      title: 'Birth Registration Form',
      description: 'Official form for registering newborn children. Must be submitted within 45 days of birth. Requires parents\' identification, hospital documentation, and witness information.',
      downloadUrl: '#'
    },
    {
      id: 'death-registration-form',
      title: 'Death Registration Form',
      description: 'Form for official registration of death certificates. Requires medical certification, identification of deceased, and information from next of kin. Essential for legal and administrative purposes.',
      downloadUrl: '#'
    },
    {
      id: 'business-license-application',
      title: 'Business License Application',
      description: 'Application form for new business licenses. Includes sections for business type, location details, owner information, and compliance declarations. Required for all commercial operations.',
      downloadUrl: '#'
    },
    {
      id: 'trade-license-renewal',
      title: 'Trade License Renewal',
      description: 'Form for annual renewal of existing trade licenses. Requires current license information, updated business details, and tax compliance documentation. Must be submitted before expiration.',
      downloadUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Municipal Forms
          </h1>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form) => (
            <div 
              key={form.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Form Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {form.title}
                </h3>

                {/* Form Description */}
                <p className="text-gray-600 mb-4 text-sm">
                  {form.description}
                </p>

                {/* Download Button */}
                <a
                  href={form.downloadUrl}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Important Note
          </h2>
          <p className="text-blue-800">
            Please ensure all forms are filled out completely and accurately. Submit completed forms to the municipal office during regular business hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormsPage;