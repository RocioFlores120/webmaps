var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cusco_limite_provincia_1 = new ol.format.GeoJSON();
var features_cusco_limite_provincia_1 = format_cusco_limite_provincia_1.readFeatures(json_cusco_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cusco_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cusco_limite_provincia_1.addFeatures(features_cusco_limite_provincia_1);
var lyr_cusco_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cusco_limite_provincia_1, 
                style: style_cusco_limite_provincia_1,
                interactive: true,
    title: 'cusco_limite_provincia<br />\
    <img src="styles/legend/cusco_limite_provincia_1_0.png" /> ACOMAYO<br />\
    <img src="styles/legend/cusco_limite_provincia_1_1.png" /> ANTA<br />\
    <img src="styles/legend/cusco_limite_provincia_1_2.png" /> CALCA<br />\
    <img src="styles/legend/cusco_limite_provincia_1_3.png" /> CANAS<br />\
    <img src="styles/legend/cusco_limite_provincia_1_4.png" /> CANCHIS<br />\
    <img src="styles/legend/cusco_limite_provincia_1_5.png" /> CHUMBIVILCAS<br />\
    <img src="styles/legend/cusco_limite_provincia_1_6.png" /> CUSCO<br />\
    <img src="styles/legend/cusco_limite_provincia_1_7.png" /> ESPINAR<br />\
    <img src="styles/legend/cusco_limite_provincia_1_8.png" /> LA CONVENCION<br />\
    <img src="styles/legend/cusco_limite_provincia_1_9.png" /> PARURO<br />\
    <img src="styles/legend/cusco_limite_provincia_1_10.png" /> PAUCARTAMBO<br />\
    <img src="styles/legend/cusco_limite_provincia_1_11.png" /> QUISPICANCHI<br />\
    <img src="styles/legend/cusco_limite_provincia_1_12.png" /> URUBAMBA<br />\
    <img src="styles/legend/cusco_limite_provincia_1_13.png" /> <br />'
        });
var format_cusco_infraestructura_salud_2 = new ol.format.GeoJSON();
var features_cusco_infraestructura_salud_2 = format_cusco_infraestructura_salud_2.readFeatures(json_cusco_infraestructura_salud_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cusco_infraestructura_salud_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cusco_infraestructura_salud_2.addFeatures(features_cusco_infraestructura_salud_2);
var lyr_cusco_infraestructura_salud_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cusco_infraestructura_salud_2, 
                style: style_cusco_infraestructura_salud_2,
                interactive: true,
                title: '<img src="styles/legend/cusco_infraestructura_salud_2.png" /> cusco_infraestructura_salud'
            });

lyr_OSMStandard_0.setVisible(true);lyr_cusco_limite_provincia_1.setVisible(true);lyr_cusco_infraestructura_salud_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_cusco_limite_provincia_1,lyr_cusco_infraestructura_salud_2];
lyr_cusco_limite_provincia_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_cusco_infraestructura_salud_2.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id': 'id', 'institucio': 'institucio', 'nombre': 'nombre', 'clasificac': 'clasificac', 'tipo': 'tipo', 'departamen': 'departamen', 'provincia': 'provincia', 'distrito': 'distrito', 'ubigeo': 'ubigeo', 'direccion': 'direccion', 'disa': 'disa', 'red': 'red', 'microrred': 'microrred', 'u_ejecutor': 'u_ejecutor', 'categoria': 'categoria', 'telefono': 'telefono', 'inicio': 'inicio', 'responsabl': 'responsabl', 'estado': 'estado', 'condicion': 'condicion', 'norte': 'norte', 'este': 'este', 'cota': 'cota', 'camas': 'camas', });
lyr_cusco_limite_provincia_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_cusco_infraestructura_salud_2.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'institucio': 'TextEdit', 'nombre': 'TextEdit', 'clasificac': 'TextEdit', 'tipo': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'ubigeo': 'TextEdit', 'direccion': 'TextEdit', 'disa': 'TextEdit', 'red': 'TextEdit', 'microrred': 'TextEdit', 'u_ejecutor': 'TextEdit', 'categoria': 'TextEdit', 'telefono': 'TextEdit', 'inicio': 'TextEdit', 'responsabl': 'TextEdit', 'estado': 'TextEdit', 'condicion': 'TextEdit', 'norte': 'TextEdit', 'este': 'TextEdit', 'cota': 'TextEdit', 'camas': 'TextEdit', });
lyr_cusco_limite_provincia_1.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'ccdd': 'no label', 'nombdep': 'no label', 'ccpp': 'no label', 'nombprov': 'no label', 'capital': 'no label', 'idprov': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_cusco_infraestructura_salud_2.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'id': 'no label', 'institucio': 'no label', 'nombre': 'no label', 'clasificac': 'no label', 'tipo': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'distrito': 'no label', 'ubigeo': 'no label', 'direccion': 'no label', 'disa': 'no label', 'red': 'no label', 'microrred': 'no label', 'u_ejecutor': 'no label', 'categoria': 'no label', 'telefono': 'no label', 'inicio': 'no label', 'responsabl': 'no label', 'estado': 'no label', 'condicion': 'no label', 'norte': 'no label', 'este': 'no label', 'cota': 'no label', 'camas': 'no label', });
lyr_cusco_infraestructura_salud_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});