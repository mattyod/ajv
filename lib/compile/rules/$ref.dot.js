{{# def.definitions }}
{{# def.setup:'$ref' }}

{{? it.resolveRef($schema) }}
  var result{{=$lvl}} = validateRef('{{=$schema}}', data{{=$dataLvl}}, dataPath{{=$dataLvl}});
  valid = result{{=$lvl}}.valid;
  if (!valid) validate.errors.push.apply(validate.errors, result{{=$lvl}}.errors);
{{??}}
  {{# def.error:'$ref' }}
  valid = false;
{{?}}