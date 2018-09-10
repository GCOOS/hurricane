<template>
    <div class="canvas">
        <Header />
        <b-container fluid>
            <div class="title">
                <h1>Satellites</h1>
            </div>
            <b-row>
                <b-col>
                    <b-card-group deck>
                        <b-card sub-title="Atlantic & Gulf of Mexico - GeoColor" img-src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-GEOCOLOR-625x375.gif" img-top><a href="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-GEOCOLOR-625x375.gif" target="_blank"><i class="fas fa-download"></i>This image</a>&nbsp;&nbsp;<a href="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-GM-GEOCOLOR-1000x1000.gif" target="_blank"><i class="fas fa-download"></i> Gulf of Mexico GeoColor (28MB)</a>
                        </b-card>
                        <b-card sub-title="Evolution GOES16-CONUS-02" img-src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-02-625x375.gif" img-top><a href="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-02-625x375.gif" target="_blank"><i class="fas fa-download"></i></a></b-card>
                    </b-card-group>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col>
                    <b-card-group deck>
                        <b-card sub-title="Temperature GOES16-CONUS-07" img-src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-07-625x375.gif" img-top><a href="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-07-625x375.gif" target="_blank"><i class="fas fa-download"></i></a></b-card>
                        <b-card sub-title="Water Vapor GOES16-CONUS-08" img-src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-08-625x375.gif" img-top>
                            <a href="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-08-625x375.gif" target="_blank"><i class="fas fa-download"></i></a></b-card>
                        <b-card sub-title="Top Height GOES16-CONUS-02" img-src="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-13-625x375.gif" img-top><a href="https://cdn.star.nesdis.noaa.gov/GOES16/ABI/GIFS/GOES16-CONUS-13-625x375.gif" target="_blank"><i class="fas fa-download"></i></a></b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>
import Header from "~/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style scoped>
.centered {
  text-align: center;
}
</style>

