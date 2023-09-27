---
title: Introducción
createdAt: '27-09-2023'
updatedAt: '27-09-2023'
description: 'Introducción a los fundamentos de TypeScript'
section: 'fundamentos'
sort: 0
layout: '@/layouts/Course.astro'
---

Esta serie de artículos te ayudarán a comprender los fundamentos de TypeScript para comenzar a utilizarlo productivamente. Te recomendamos, antes de empezar, conocer las bases de JavaScript, ya que este lenguaje es la base de muchos de los conceptos utilizados en TypeScript.

## Antes de empezar
Si bien, puedes comenzar a utilizar TypeScript simplemente instalándolo y añadiendo los tipos a los distintos componentes de tu proyecto, es recomendable entender antes la *inferencia de tipos*, la *definición de tipos* y la función del archivo *tsconfig.json*.


### Inferencia de tipos
Se denomina inferencia de tipos al mecanismo en que un compilador intenta determinar de forma automática el tipo de una variable o expresión basándose en el contexto en el que se utiliza. Gracias a esto, no siempre es necesario que especifiquemos explícitamente los tipos, ya que TypeScript puede inferirlos en muchas situaciones.

Para mostrar como funciona esto, aquí tienes un ejemplo sencillo:
```ts
const x = 10      // TypeScript infiere que x es del tipo 'number'
const y = 'Hello' // TypeScript infiere que y es del tipo 'string'
```

En este ejemplo, no añadimos ninguna anotación de tipos y esto es gracias a lo anteriormente mencionado. Si bien, es recomendable especificarlos, esto es útil en situaciones en las que es redundante añadirlos, como lo son las variables con valores literales (el ejemplo anterior), funciones que no tienen un valor de retorno, entre otros.


### Definición de tipos
A diferencia del ejemplo anterior, la definición de tipos se refiere a especificar explícitamente los tipos de una variable, función, etc.
Si bien, daremos una explicación más detallada sobre como tipar los distintos tipos de elementos del código en cada sección, aquí hay un breve ejemplo de como puede hacerse.
```ts
const x: number = 10
const y: string = concat('Hello', 'world')
```

### Archivo tsconfig.json
Este es el archivo de configuración de TypeScript. Se utiliza para definir la forma en la que el compilador “lee” y <a href='https://es.wikipedia.org/wiki/Transpilador' target='_blank' rel='noopener noreferrer'>transpila</a> nuestro código.

En muchas guías o tutoriales se suelen referenciar algunas propiedades de este archivo (o directamente inicializarlo), lo cual puede resultar abrumador debido a la gran cantidad de opciones que este tiene.

Por esto, para esta guía te recomendamos utilizar el <a href='https://www.typescriptlang.org/play' target='_blank' rel='noopener noreferrer'>playground</a> de TypeScript o, en caso de que quieras utilizarlo en tu máquina local, puedes seguir nuestra guía de instalación y utilizar nuestra configuración recomendada.

Conociendo estos conceptos, ya podemos adentrarnos en los fundamentos de TypeScript.

¡Empecemos!