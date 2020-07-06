import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const Section1 = styled.div`
  height: 60rem;
  .full-height {
    height: 100%;
  }
  padding: 0 2rem;
  background-image: url('https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1593983079/ayudascontables/section1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 0.1rem;
`;

const Section2 = styled.div`
  .section2 {
    &__image {
      .image-holder {
        overflow: hidden;
        img {
          /* object-fit: cover; */
          max-width: auto;
          max-height: 100%;
        }
      }
    }

    &__content {
      height: 100%;
    }
  }
`;

const Section3 = styled.div`
  height: 60rem;
  .image {
    background-image: url('https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1593983079/ayudascontables/section3.jpg');
  }
`;

export default function Index() {
  const abrirComprobantes = () => {
    window.location.replace('https://egresos.' + window.location.host + '/');
  };

  const section2Content = (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={4} className="section2__image">
        <Box
          className="image-holder"
          styles={{ overflow: 'hidden' }}
          display={{ xs: 'none', md: 'block' }}
        >
          <LazyLoad offset={50}>
            <img
              src="https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1594013389/ayudascontables/section2_desktop.jpg"
              alt="generador de certificados de egresos"
            ></img>
          </LazyLoad>
        </Box>
        <Box
          className="image-holder"
          display={{ xs: 'block', sm: 'block', md: 'none' }}
        >
          <LazyLoad offset={50}>
            <img
              src="https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1593990094/ayudascontables/section2_mobile.jpg"
              alt="generador de certificados de egresos"
            ></img>
          </LazyLoad>
        </Box>
      </Grid>

      <Grid item xs={12} md={8} className="section2__content">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={6}
        >
          <Grid item>
            {' '}
            <Box className="image-holder" display={{ xs: 'none', sm: 'block' }}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                align="center"
              >
                <strong>Comprobantes de egreso Online</strong>
              </Typography>
            </Box>
            <Box className="image-holder" display={{ xs: 'block', sm: 'none' }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                align="center"
              >
                <strong>Comprobantes de egreso Online</strong>
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={6}
            >
              <Grid item xs={10} sm={5} md={5}>
                {' '}
                <Card elevation={4}>
                  <CardActionArea>
                    <LazyLoad height={400}>
                      <CardMedia
                        component="img"
                        alt="Autocompleta beneficiario comprobante de egresos"
                        height="160"
                        image="https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1594010319/ayudascontables/autocomplete.png"
                        title="Autocompleta beneficiario comprobante de egresos"
                      />
                    </LazyLoad>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Autocompletado
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Escribe el nombre del proveedor y el nit aparece
                        automáticamente.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={abrirComprobantes}
                    >
                      Usar gratis
                    </Button>
                  </CardActions>
                </Card>{' '}
              </Grid>
              <Grid item xs={10} sm={5} md={5}>
                {' '}
                <Card elevation={4}>
                  <CardActionArea>
                    <LazyLoad height={400}>
                      <CardMedia
                        component="img"
                        alt="calculo de iva en el comprobante de egresos"
                        height="160"
                        image="https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1594010319/ayudascontables/iva.jpg"
                        title="calculo de iva en el comprobante de egresos"
                      />
                    </LazyLoad>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        IVA
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Cálculo de IVA a un click.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={abrirComprobantes}
                    >
                      Usar gratis
                    </Button>
                  </CardActions>
                </Card>{' '}
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={6}
            >
              <Grid item xs={10} sm={5} md={5}>
                {' '}
                <Card elevation={4}>
                  <CardActionArea>
                    <LazyLoad height={400}>
                      <CardMedia
                        component="img"
                        alt="Compartir comprobantes de egreso"
                        height="160"
                        image="https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1594010319/ayudascontables/comparte.jpg"
                        title="Compartir comprobantes de egreso"
                      />
                    </LazyLoad>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Guarda y Comparte
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Guarda tus comprobantes de egreso para editar o imprimir
                        luego.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={abrirComprobantes}
                    >
                      Usar gratis
                    </Button>
                  </CardActions>
                </Card>{' '}
              </Grid>
              <Grid item xs={10} sm={5} md={5}>
                {' '}
                <Card elevation={4}>
                  <CardActionArea>
                    <LazyLoad height={400}>
                      <CardMedia
                        component="img"
                        alt="Listado de compras de comprobante de egreso"
                        height="160"
                        image="https://res.cloudinary.com/felipelujan/image/upload/f_auto/v1594010319/ayudascontables/listado.jpg"
                        title="Listado de compras de comprobante de egreso"
                      />
                    </LazyLoad>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Listado de compras.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Te mostramos un listado de objetos y unidades incluidas
                        en cada comprobante.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={abrirComprobantes}
                    >
                      Usar gratis
                    </Button>
                  </CardActions>
                </Card>{' '}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  return (
    <>
      <Section1>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="flex-start"
          className="full-height"
        >
          <Grid item>
            <strong>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                align="center"
                color="secondary"
              >
                SOFTWARE CONTABLE GRATIS
              </Typography>
            </strong>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  color="secondary"
                >
                  Herramientas contables para administrar tu negocio.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom color="secondary">
                  Estamos comprometidos con que todos nuestros servicios sean
                  <strong> 100% gratis</strong>.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={abrirComprobantes}
                >
                  Comprobantes de egreso
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" size="large">
                  Punto de venta POS (próximamente)
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" size="large">
                  Gestiona Inventario (próximamente)
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" size="large">
                  Factura electrónica (próximamente)
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section1>
      <Section2>
        <Box
          className="section2"
          display={{ xs: 'block', sm: 'block', md: 'none' }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {section2Content}
          </Grid>
        </Box>
        <Box className="section2" display={{ xs: 'none', md: 'block' }}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            {section2Content}
          </Grid>
        </Box>
      </Section2>
    </>
  );
}
