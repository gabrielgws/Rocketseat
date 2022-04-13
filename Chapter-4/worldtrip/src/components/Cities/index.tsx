import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities(){
  return(
    <>
      <Heading fontWeight='500' fontSize={['2xl', '4xl']} mb='10'>Cidades +100</Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4,  1fr)']}
        gap={['20px', '45px']}
        alignItems='center'
        justifyContent='center'
        px={['30px', '0']}
      >
        <City city='Londres' country='Reino Unido' cityImg='Londres' countryImg='ReinoUnido' />
        <City city='Paris' country='França' cityImg='Paris' countryImg='França' />
        <City city='Roma' country='Itália' cityImg='Roma' countryImg='Itália' />
        <City city='Amsterdã' country='Holanda' cityImg='Amsterda' countryImg='Holanda' />
      </Grid>
    </>
  )
}