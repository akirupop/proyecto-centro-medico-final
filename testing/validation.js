const validarContrasena = require('./validaciones')

test('Cumplio las pruebas realizadas', ()=>{
    const contrasenaValida='Backend1234'
    const contrasenaNoValida1='1234'
    const contrasenaNoValida2='Backend'
    const contrasenaNoValida3='backend1234'

    //Pruebas
    expect(validarContrasena(contrasenaValida)).toBe(true)
    expect(validarContrasena(contrasenaNoValida1)).toBe(false)
    expect(validarContrasena(contrasenaNoValida2)).toBe(false)
    expect(validarContrasena(contrasenaNoValida3)).toBe(false)
})