# Bitacora de inspeccion HTTP - semana 1
## 1. Sitio del Estado colombiano

### Datos generales

**URL analizada:** `https://www.gov.co/`

**Fecha y hora de observación:** 04/06/2026 12:45

**Código de estado del documento principal:** 200 OK

**TTFB:** 164 ms

**Tamaño total transferido:** 1.8 MB

**Número total de peticiones:** 53

**Redirecciones 3xx observadas:** 
301 Moved Permanently (Redirección de HTTP a HTTPS).

**Autoridad emisora del certificado TLS:** DigiCert Global G2 TLS RSA SHA256 2020 CA

**Fecha de expiración del certificado TLS:** 16/09/2026
### Capturas

![Panel Network sitio Estado](capturas/sitio-1-network.png)
![Certificado TLS sitio Estado](capturas/estado-certificado.png)
## 1. Sitio del Estado colombiano (Análisis de latencia)

### Datos de respuesta del servidor

**URL analizada:** `https://www.gov.co/`

**Tiempo de respuesta (TTFB):** 164 ms
 *Nota técnica:* Este valor representa el tiempo que tarda el servidor en procesar la petición inicial y enviar el primer byte de datos al navegador.

**Detalle de tiempos obtenidos:**
 **Queueing/Stalled:** 0.08 ms
 **DNS Lookup:** 0.21 ms
 **Initial connection:** 35.81 ms
 **SSL:** 47.92 ms
 **Time to First Byte (TTFB):** 164.00 ms
 **Content Download:** 8.52 ms

### Captura de referencia
![Detalle de tiempos de respuesta del sitio estatal](capturas/sitio-tiempo-de-respuesta.png)
### 1. Sitio del Estado colombiano (Información del certificado TLS)

**Organización emisora:** Amazon
**Nombre común (CN):** Amazon RSA 2048 M01
**Periodo de validez:** Emitido el 06/05/2026, vence el 20/11/2026[cite: 1]
**Huella digital (SHA-256):** 5af137d3bb43d5163084d98a0e0494b11331696fe0dc8a15b050a5e09cf110dc[cite: 1]

**Captura del certificado:**
![Certificado TLS sitio Estado](capturas/sitio-1-tlc_4.png)

### 2. Sitio Universitario (Análisis de red)

**URL analizada:** `https://www.fumc.edu.co/`

**Código de estado:** 200 OK
**Tiempo de carga total:** 2.45 s
**Tamaño total transferido:** 1.5 MB
**Número de peticiones (requests):** 84

**Captura del panel de red:**
![Detalle de peticiones sitio universitario](capturas/sitio-2-network.png)
### 2. Sitio Universitario (Análisis de tiempos de respuesta)

**URL analizada:** `https://www.fumc.edu.co/`

**Tiempo de respuesta (TTFB):** 1130 ms
 *Nota técnica:* Este valor refleja el tiempo transcurrido desde la solicitud del cliente hasta que el servidor comienza a enviar la respuesta.

**Detalle de latencia y tiempos:**
 **Queueing/Stalled:** 0.05 ms
 **Initial connection:** 75.32 ms
 **SSL Handshake:** 92.15 ms
 **Time to First Byte (TTFB):** 1130.00 ms
 **Content Download:** 48.65 ms

**Captura de referencia:**
![Detalle de tiempos de respuesta del sitio universitario](capturas/sitio-2-tiempo-de-respuesta.png)
### 2. Sitio Universitario (Información del certificado TLS)

**Organización emisora:** GlobalSign nv-sa
**Nombre común (CN):** AlphaSSL CA - SHA256 - G2
**Periodo de validez:** Emitido el 08/11/2025, vence el 07/11/2026
**Huella digital (SHA-256):** 9b2d8f... (extraída de la inspección de seguridad)

**Captura del certificado:**
![Certificado TLS sitio universitario](capturas/sitio-2-tlc.png)
### 3. Sitio Comercial (Análisis de red)

**URL analizada:** `https://www.rappi.com.co/`

**Código de estado:** 200 OK
**Tiempo de carga total:** 3.12 s
**Tamaño total transferido:** 1.2 MB
**Número de peticiones (requests):** 118

**Captura del panel de red:**
![Detalle de peticiones sitio comercial](capturas/sitio-3-network.png)
### 3. Sitio Comercial (Análisis de tiempos de respuesta)

**URL analizada:** `https://www.rappi.com.co/`

**Tiempo de respuesta (TTFB):** 1150 ms
 *Nota técnica:* Este valor indica el tiempo de espera por la respuesta del servidor (Waiting for server response).

**Detalle de latencia y tiempos:**
 **Queueing:** 3.06 ms
 **Stalled:** 3.94 ms
 **Request sent:** 1.21 ms
 **Waiting for server response:** 1150.00 ms (1.15 s)
 **Content Download:** 12.48 ms

**Captura de referencia:**
![Detalle de tiempos de respuesta del sitio comercial](capturas/sitio-3-tiempo-de-respuesta_2.png)
### 3. Sitio Comercial (Información del certificado TLS)

**Organización emisora:** Amazon
**Nombre común (CN):** Amazon RSA 2048 M01
**Periodo de validez:** Emitido el 27/12/2025, vence el 25/01/2027[cite: 1]
**Huella digital (SHA-256):** 856b89971aa81d4b8e5b267e82300470a2b9d2d4c824755d6847fcaa9e84f94a[cite: 1]

**Captura del certificado:**
![Certificado TLS sitio comercial](capturas/sitio-3-tlc_2.png)

### Reflexion final
Al hacer este ejercicio de inspeccionar estos tres sitios web, me llevé una sorpresa interesante al comparar cómo funcionan por dentro. El sitio estatal (gov.co) fue claramente el más rápido en responder, con un tiempo de respuesta (TTFB) muy bajo de 164 ms. Esto se nota bastante porque, al entrar, la página carga casi al instante. Comparando esto con el sitio de la universidad (fumc.edu.co) y el de Rappi (rappi.com.co), que tardaron más de un segundo en responder, me queda claro que el portal del Estado tiene una infraestructura muy bien optimizada para que mucha gente entre al mismo tiempo sin que se caiga o se ponga lento.  Algo que me llamó la atención es que, aunque el sitio de la universidad y el comercial no fueron tan rápidos en el inicio, cargan un montón de archivos externos. El sitio de la universidad se dispara en el número de peticiones (84 o más), y Rappi carga muchísimos scripts para que la app funcione bien. Sobre las redirecciones, me di cuenta de que todos pasan de HTTP a HTTPS, lo cual es súper importante hoy en día para que nuestros datos viajen seguros. También vi que cada quien elige a su proveedor de seguridad (DigiCert, GlobalSign o Amazon), lo que demuestra que cada empresa toma sus propias decisiones de seguridad según lo que necesiten. En resumen, aprendí que detrás de una simple página web hay todo un mundo de decisiones técnicas que definen qué tan buena es nuestra experiencia al navegar.  