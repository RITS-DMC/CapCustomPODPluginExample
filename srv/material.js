
const cds = require('@sap/cds');
const axios = require('axios');
const qs = require('qs');

module.exports = cds.service.impl(async function () {
    const { MaterialsReport } = this.entities;

    const getToken = async () => {
        const tokenUrl = 'https://ritsdmc-az12fc9w.authentication.eu20.hana.ondemand.com/oauth/token';

        const requestBody = qs.stringify({
            client_id: 'sb-5a4cc893-075b-4847-aa0c-64ac8e5341eb!b5357|dmc-services-quality!b330',
            client_secret: 'h6fLBaZ8fs1PScAUhpMTlQoG0+8=',
            grant_type: 'client_credentials'
        });

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        try {
            const response = await axios.post(tokenUrl, requestBody, { headers });
            // console.log("Access Token:", response.data.access_token);
            return response.data.access_token;
        } catch (error) {
            console.error("Error fetching token:", error.response ? error.response.data : error.message);
            throw new Error('Failed to fetch authentication token');
        }
    };

    this.on('READ', 'MaterialsReport', async (req) => 
        {
        try {
            const token = await getToken();
            const requestBody = {
                plant: "MB01"
            };
            const apiUrl = 'https://api.test.eu20.dmc.cloud.sap/pe/api/v1/process/processDefinitions/start?key=REG_ade71810-dbca-45ee-9472-ae2a8ff45351&async=false';
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            };

        
            const response = await axios.post(apiUrl, requestBody, { headers });
            // console.log("API Response: ",response.data);
            // return response.data;
            const filteredData = response.data.outPut.map(mat => ({
                material: mat.material,
                version: mat.version,
                status: mat.status,
                description: mat.description,
                lotSize: mat.lotSize,
                unitOfMeasure: mat.unitOfMeasure,
                procurementType: mat.procurementType,
                materialType: mat.materialType
            }));

            return filteredData;
        
        } catch (err) {
            console.log("Error: ", req.err);
            req.error(500, 'Failed to fetch production process data');
        }
    });

    this.on('READ','LocalMaterialData', async req=>
        // const {MaterialsData}=cds.entities("callingDMAPI.db");
        // const results=await cds.tx(req).run(SELECT.from(MaterialsData));
        // return results;

        {
            try {
                const token = await getToken();
                const requestBody = {
                    plant: 'M206'
                };
                const apiUrl = 'https://api.test.eu20.dmc.cloud.sap/pe/api/v1/process/processDefinitions/start?key=REG_e437794b-47ab-43fe-996c-fd0b965ddf31&async=false';
                const headers = {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                };
    
            
                const response = await axios.post(apiUrl, requestBody, { headers });
                console.log("API Response: ",response.data);
                // return response.data;
                const filteredData = response.data.outPut.map(mat => ({
                    material: mat.material,
                    version: mat.version,
                    status: mat.status,
                    description: mat.description,
                    lotSize: mat.lotSize,
                    unitOfMeasure: mat.unitOfMeasure,
                    procurementType: mat.procurementType,
                    materialType: mat.materialType
                }));
    
                return filteredData;
            
            } catch (err) {
                console.log("Error: ", req.err);
                req.error(500, 'Failed to fetch production process data');
            }
    })

    
    
});


