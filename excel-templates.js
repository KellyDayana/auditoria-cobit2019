// ============================================
// PLANTILLAS EXCEL - Estructura completa de formularios COBIT 2019
// Todas las 14 hojas con su estructura exacta
// ============================================

const excelTemplates = {
    // HOJA 1: Portada
    'portada': {
        sheetName: '1. Portada',
        structure: [
            ['AUDITORÍA DE GOBIERNO Y GESTIÓN DE I&T — COBIT 2019', '', '', ''],
            ['Libro de papeles de trabajo del auditor · Versión 2.0 · Formularios en blanco. Complete las hojas en el orden del índice.', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', ''],
            ['', '', '', ''],
            ['', '1 · DATOS DE LA AUDITORÍA  (los campos con * son obligatorios)', '', ''],
            ['', 'Campo', 'Información (completar)', 'Ayuda / ejemplo'],
            ['', 'Entidad auditada *', '', 'Ej.: Empresa Ejemplo S.A.'],
            ['', 'Unidad / área auditada *', '', 'Ej.: Gerencia de Tecnología'],
            ['', 'Período evaluado *', '', 'Ej.: 01/01/2026 - 30/09/2026'],
            ['', 'Auditor líder *', '', 'Ej.: Nombre Apellido'],
            ['', 'Equipo auditor', '', 'Ej.: Auditor 1, Auditor 2'],
            ['', 'Fecha de inicio', '', 'Formato dd/mm/aaaa'],
            ['', 'Fecha de cierre', '', 'Formato dd/mm/aaaa'],
            ['', 'Versión del papel de trabajo', '2.0', ''],
            ['', 'Referencia normativa', 'COBIT 2019 (ISACA) - Marco de gobierno y gestión de I&T', ''],
            ['', 'Objetivo de la auditoría', 'Evaluar el nivel de capacidad de los procesos de I&T y el cumplimiento de las prácticas de gestión frente a COBIT 2019.', 'Puede editar el texto sugerido.']
        ],
        dataStartRow: 5,
        dataColumns: { field: 1, value: 2, help: 3 }
    },
    
    // HOJA 2: Contexto
    'contexto': {
        sheetName: '2. Contexto',
        structure: [
            ['2 · CONTEXTO DE LA ENTIDAD', '', '', ''],
            ['Entendimiento del negocio y de I&T antes de aplicar los factores de diseño (COBIT 2019 EDM01, APO01).', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', ''],
            ['', '', '', ''],
            ['', 'Campo', 'Información (completar)', 'Ayuda / ejemplo'],
            ['', 'Misión / visión del negocio', '', 'Describa la misión y visión...'],
            ['', 'Estrategia del negocio', '', 'Crecimiento, innovación, servicio al cliente, costo...'],
            ['', 'Estructura organizacional (TI)', '', 'Organigrama, dependencias, comités...'],
            ['', 'Principales procesos de negocio', '', 'Procesos core y sistemas que los soportan...'],
            ['', 'Marco regulatorio aplicable', '', 'Leyes, normas sectoriales, protección de datos...'],
            ['', 'Historial de auditorías previas', '', 'Hallazgos abiertos, auditorías anteriores...'],
            ['', 'Madurez percibida de I&T', '', 'Seleccione de la lista.'],
            ['', 'Observaciones generales', '', 'Notas adicionales...']
        ],
        dataStartRow: 4,
        dataColumns: { field: 1, value: 2, help: 3 }
    },
    
    // HOJA 3: Escalas
    'escalas': {
        sheetName: '3. Escalas',
        structure: [
            ['3 · ESCALAS DE REFERENCIA', '', '', ''],
            ['Basadas en el modelo de capacidad de procesos COBIT 2019 (niveles 0 a 5). Hoja de consulta: no editar.', '', '', ''],
            ['', '', '', ''],
            ['', 'NIVELES DE CAPACIDAD DE PROCESOS', '', ''],
            ['', 'Nivel', 'Nombre', 'Descripción'],
            ['', '0', 'Incompleto', 'El proceso no se implementa o no logra su propósito.'],
            ['', '1', 'Realizado', 'Logra su propósito de forma informal y no planificada.'],
            ['', '2', 'Gestionado', 'Planificado, monitoreado y ajustado; productos controlados.'],
            ['', '3', 'Definido', 'Proceso estándar definido y documentado en toda la organización.'],
            ['', '4', 'Medible', 'Opera dentro de límites definidos y se mide cuantitativamente.'],
            ['', '5', 'Optimizado', 'Mejora continua para responder a cambios y metas empresariales.']
        ],
        dataStartRow: -1
    },
    
    // HOJA 4: Factores de Diseño
    'factores': {
        sheetName: '4. Factores_Diseno',
        structure: [
            ['4 · FACTORES DE DISEÑO COBIT 2019', '', '', '', '', '', '', '', ''],
            ['Valore cada factor (Bajo / Medio / Alto) para justificar la prioridad de los objetivos.', '', '', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['', 'Índice de exigencia', 'Lectura', 'Factores valorados', '', '', '', '', ''],
            ['', '—', 'Valore los factores', '0 / 11', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['N°', 'Factor de diseño', 'Qué evaluar', 'Guía de valoración', 'Valoración', 'Valor', 'Peso (1-5)', 'Puntaje', 'Observaciones'],
            ['1', 'Estrategia empresarial', 'Estrategia dominante', 'Alto: TI es habilitador crítico', '', '', '3', '', ''],
            ['2', 'Metas empresariales', 'Dependencia de TI', 'Alto: varias metas dependen de TI', '', '', '3', '', ''],
            ['3', 'Perfil de riesgo', 'Escenarios de riesgo', 'Alto: riesgos materiales', '', '', '3', '', '']
        ],
        dataStartRow: 7,
        dataColumns: { field: 1, value: 4, obs: 8 }
    },
    
    // HOJA 5: Alcance
    'alcance': {
        sheetName: '5. Alcance',
        structure: [
            ['5 · ALCANCE: OBJETIVOS COBIT 2019', '', '', '', '', '', ''],
            ['5 dominios y 40 objetivos. Defina prioridad, inclusión y justificación.', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['Dominio', 'Objetivo', 'Prioridad', 'Incluido', 'Nivel meta', 'Justificación', 'Estado'],
            ['EDM', 'EDM01 - Marco de gobierno', '', '', '', '', ''],
            ['EDM', 'EDM02 - Beneficios', '', '', '', '', ''],
            ['EDM', 'EDM03 - Optimización del riesgo', '', '', '', '', '']
        ],
        dataStartRow: 4,
        dataColumns: { domain: 0, objective: 1, priority: 2, included: 3, level: 4, justification: 5 }
    },
    
    // HOJA 6: Riesgos
    'riesgos': {
        sheetName: '6. Riesgos_Auditoria',
        structure: [
            ['6 · RIESGOS DE LA AUDITORÍA', '', '', '', '', '', ''],
            ['Riesgos propios del trabajo de auditoría. Documente probabilidad e impacto (1-5).', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['N°', 'Riesgo', 'Probabilidad', 'Impacto', 'Nivel', 'Controles/Mitigación', 'Responsable'],
            ['1', '', '', '', '', '', ''],
            ['2', '', '', '', '', '', '']
        ],
        dataStartRow: 4,
        dataColumns: { num: 0, risk: 1, prob: 2, impact: 3, controls: 5, responsible: 6 }
    },
    
    // HOJA 7: Evidencias
    'evidencias': {
        sheetName: '7. Solicitud_Evidencias',
        structure: [
            ['7 · SOLICITUD DE INFORMACIÓN Y EVIDENCIAS (PBC)', '', '', '', '', '', '', '', ''],
            ['Registro de lo solicitado al auditado y su estado de recepción.', '', '', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['N°', 'Documento/Evidencia', 'Tipo', 'Descripción', 'Fecha solicitud', 'Fecha recepción', 'Responsable', 'Estado', 'Observaciones'],
            ['1', '', '', '', '', '', '', '', ''],
            ['2', '', '', '', '', '', '', '', '']
        ],
        dataStartRow: 4,
        dataColumns: { num: 0, doc: 1, type: 2, desc: 3, dateReq: 4, dateRec: 5, resp: 6, obs: 8 }
    },
    
    // HOJA 8: Programa
    'programa': {
        sheetName: '8. Programa_Auditoria',
        structure: [
            ['8 · PROGRAMA DE AUDITORÍA', '', '', '', '', '', '', '', ''],
            ['Un procedimiento por objetivo en alcance. Registre resultado: Cumple = 100 · Parcial = 50 · No cumple = 0', '', '', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', ''],
            ['Objetivo', 'Procedimiento', 'Tipo', 'Alcance', 'Resultado', 'Puntaje', 'Evidencia', 'Observaciones', 'Auditor'],
            ['', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '']
        ],
        dataStartRow: 4,
        dataColumns: { obj: 0, proc: 1, type: 2, scope: 3, result: 4, points: 5, evidence: 6, obs: 7, auditor: 8 }
    },
    
    // HOJA 9: Muestreo
    'muestreo': {
        sheetName: '9. Muestreo_Pruebas',
        structure: [
            ['9 · MUESTREO Y PRUEBAS', '', '', '', '', '', '', ''],
            ['Defina población, muestra y método para cada procedimiento.', '', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['Procedimiento', 'Población', 'Tamaño muestra', 'Método', 'Resultado', 'Puntaje', 'Observaciones', 'Estado'],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '']
        ],
        dataStartRow: 4,
        dataColumns: { proc: 0, pop: 1, sample: 2, method: 3, result: 4, points: 5, obs: 6 }
    },
    
    // HOJA 10: Capacidad
    'capacidad': {
        sheetName: '10. Capacidad',
        structure: [
            ['10 · EVALUACIÓN DE CAPACIDAD', '', '', '', '', '', '', '', '', ''],
            ['Nivel actual (0-5) vs. nivel meta. La brecha se calcula sola.', '', '', '', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['Objetivo', 'Nivel actual', 'Nivel meta', 'Brecha', 'Estado', 'Nombre nivel', 'Observaciones', 'Evidencia', 'Fecha evaluación', 'Auditor'],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '']
        ],
        dataStartRow: 4,
        dataColumns: { obj: 0, current: 1, target: 2, obs: 6, evidence: 7, date: 8, auditor: 9 }
    },
    
    // HOJA 11: Hallazgos
    'hallazgos': {
        sheetName: '11. Hallazgos',
        structure: [
            ['11 · MATRIZ DE HALLAZGOS', '', '', '', '', '', '', '', '', ''],
            ['Condición, criterio, causa y efecto. Riesgo = probabilidad × impacto (1-5).', '', '', '', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['N°', 'Hallazgo', 'Severidad', 'Condición', 'Criterio', 'Causa', 'Efecto', 'Probabilidad', 'Impacto', 'Riesgo', 'Recomendación', 'Objetivo', 'Responsable', 'Fecha', 'Estado'],
            ['1', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['2', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        ],
        dataStartRow: 4,
        dataColumns: { num: 0, finding: 1, severity: 2, condition: 3, criteria: 4, cause: 5, effect: 6, prob: 7, impact: 8, recommendation: 10, obj: 11, resp: 12, date: 13 }
    },
    
    // HOJA 12: Plan de Acción
    'plan': {
        sheetName: '12. Plan_Accion',
        structure: [
            ['12 · PLAN DE ACCIÓN CORRECTIVA', '', '', '', '', '', '', '', '', '', ''],
            ['Una o más acciones por hallazgo. Días restantes y semáforo se calculan con la fecha de hoy.', '', '', '', '', '', '', '', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', ''],
            ['Hallazgo', 'Acción correctiva', 'Responsable', 'Fecha inicio', 'Fecha compromiso', 'Avance %', 'Estado', 'Días restantes', 'Semáforo', 'Observaciones', 'Seguimiento'],
            ['', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '']
        ],
        dataStartRow: 4,
        dataColumns: { finding: 0, action: 1, resp: 2, startDate: 3, commitDate: 4, progress: 5, obs: 9, followup: 10 }
    },
    
    // HOJA 13: Resumen
    'resumen': {
        sheetName: '13. Resumen',
        structure: [
            ['13 · RESUMEN EJECUTIVO', '', '', '', '', '', ''],
            ['Panel de resultados calculado automáticamente. No requiere llenado.', '', '', '', '', '', ''],
            ['■ Todas las celdas de esta hoja son fórmulas (no editar).', '', '', '', '', '', ''],
            ['', '', '', '', '', '', ''],
            ['Indicador', 'Valor', 'Descripción', 'Gráfico', 'Semáforo', 'Interpretación', 'Acción sugerida'],
            ['Objetivos en alcance', '0', 'Total objetivos evaluados', '', '', '', ''],
            ['Nivel promedio', '0', 'Capacidad promedio', '', '', '', ''],
            ['Hallazgos totales', '0', 'Total de hallazgos', '', '', '', '']
        ],
        dataStartRow: -1
    },
    
    // HOJA 14: Informe
    'informe': {
        sheetName: '14. Informe_Dictamen',
        structure: [
            ['14 · INFORME Y DICTAMEN', '', '', ''],
            ['Conclusiones formales, opinión del auditor y firma.', '', '', ''],
            ['■ Amarillo = celda a completar        ■ Gris = se calcula sola (no editar)', '', '', ''],
            ['', '', '', ''],
            ['', 'Campo', 'Información (completar)', 'Ayuda / ejemplo'],
            ['', 'Opinión del auditor', '', 'Seleccione de la lista.'],
            ['', 'Limitaciones al alcance', '', 'Describa limitaciones...'],
            ['', 'Conclusiones por dominio', '', 'EDM: ...  APO: ...  BAI: ...  DSS: ...  MEA: ...'],
            ['', 'Recomendaciones generales', '', 'Recomendaciones de alto nivel...'],
            ['', 'Firma del auditor líder', '', 'Nombre y firma'],
            ['', 'Fecha de emisión', '', 'Formato dd/mm/aaaa']
        ],
        dataStartRow: 4,
        dataColumns: { field: 1, value: 2, help: 3 }
    }
};

// Función para obtener la plantilla de una hoja
function getSheetTemplate(moduleName) {
    return excelTemplates[moduleName] || null;
}

// Función para crear hoja vacía desde plantilla
function createEmptySheet(moduleName) {
    const template = getSheetTemplate(moduleName);
    if (!template) return null;
    
    // Clonar estructura
    return template.structure.map(row => [...row]);
}

// Función para crear hoja llena con datos del formulario
function createFilledSheet(moduleName, formData) {
    const template = getSheetTemplate(moduleName);
    if (!template || template.dataStartRow === -1) {
        // Si no tiene datos editables, devolver hoja vacía
        return createEmptySheet(moduleName);
    }
    
    // Clonar estructura
    const data = template.structure.map(row => [...row]);
    
    // Llenar datos en las filas correspondientes
    const cols = template.dataColumns;
    
    Object.entries(formData).forEach(([key, value]) => {
        // Buscar la fila que corresponde al campo
        for (let i = template.dataStartRow + 1; i < data.length; i++) {
            // Si encontramos una fila con el campo que coincide
            if (data[i][cols.field] && data[i][cols.field].toLowerCase().includes(key.toLowerCase())) {
                data[i][cols.value] = value;
                break;
            }
        }
    });
    
    return data;
}

console.log('✅ Plantillas Excel cargadas: 14 módulos disponibles');
