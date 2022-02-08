import dynamic from 'next/dynamic';

import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Dashboard() {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show:false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2021-01-12T11:56:00.000z',
        '2021-01-13T11:56:00.000z',
        '2021-01-14T11:56:00.000z',
        '2021-01-15T11:56:00.000z',
        '2021-01-16T11:56:00.000z',
        '2021-01-17T11:56:00.000z',
        '2021-01-18T11:56:00.000z',
        '2021-01-19T11:56:00.000z',
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      }
    }
  };

  const series = [
    { name: 'series1', data: [12, 31, 120, 10, 28, 61, 18, 112]}
  ];

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start" >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>      

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>     
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}