{@}AntimatterCopy.fs{@}uniform sampler2D tDiffuse;

varying vec2 vUv;

void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
}{@}AntimatterCopy.vs{@}varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}AntimatterPass.vs{@}varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}AntimatterPosition.vs{@}uniform sampler2D tPos;

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}{@}AntimatterBasicFrag.fs{@}void main() {
    gl_FragColor = vec4(1.0);
}{@}antimatter.glsl{@}vec3 getData(sampler2D tex, vec2 uv) {
    return texture2D(tex, uv).xyz;
}

vec4 getData4(sampler2D tex, vec2 uv) {
    return texture2D(tex, uv);
}

{@}conditionals.glsl{@}vec4 when_eq(vec4 x, vec4 y) {
  return 1.0 - abs(sign(x - y));
}

vec4 when_neq(vec4 x, vec4 y) {
  return abs(sign(x - y));
}

vec4 when_gt(vec4 x, vec4 y) {
  return max(sign(x - y), 0.0);
}

vec4 when_lt(vec4 x, vec4 y) {
  return max(sign(y - x), 0.0);
}

vec4 when_ge(vec4 x, vec4 y) {
  return 1.0 - when_lt(x, y);
}

vec4 when_le(vec4 x, vec4 y) {
  return 1.0 - when_gt(x, y);
}

vec3 when_eq(vec3 x, vec3 y) {
  return 1.0 - abs(sign(x - y));
}

vec3 when_neq(vec3 x, vec3 y) {
  return abs(sign(x - y));
}

vec3 when_gt(vec3 x, vec3 y) {
  return max(sign(x - y), 0.0);
}

vec3 when_lt(vec3 x, vec3 y) {
  return max(sign(y - x), 0.0);
}

vec3 when_ge(vec3 x, vec3 y) {
  return 1.0 - when_lt(x, y);
}

vec3 when_le(vec3 x, vec3 y) {
  return 1.0 - when_gt(x, y);
}

vec2 when_eq(vec2 x, vec2 y) {
  return 1.0 - abs(sign(x - y));
}

vec2 when_neq(vec2 x, vec2 y) {
  return abs(sign(x - y));
}

vec2 when_gt(vec2 x, vec2 y) {
  return max(sign(x - y), 0.0);
}

vec2 when_lt(vec2 x, vec2 y) {
  return max(sign(y - x), 0.0);
}

vec2 when_ge(vec2 x, vec2 y) {
  return 1.0 - when_lt(x, y);
}

vec2 when_le(vec2 x, vec2 y) {
  return 1.0 - when_gt(x, y);
}

float when_eq(float x, float y) {
  return 1.0 - abs(sign(x - y));
}

float when_neq(float x, float y) {
  return abs(sign(x - y));
}

float when_gt(float x, float y) {
  return max(sign(x - y), 0.0);
}

float when_lt(float x, float y) {
  return max(sign(y - x), 0.0);
}

float when_ge(float x, float y) {
  return 1.0 - when_lt(x, y);
}

float when_le(float x, float y) {
  return 1.0 - when_gt(x, y);
}

vec4 and(vec4 a, vec4 b) {
  return a * b;
}

vec4 or(vec4 a, vec4 b) {
  return min(a + b, 1.0);
}

vec4 Not(vec4 a) {
  return 1.0 - a;
}

vec3 and(vec3 a, vec3 b) {
  return a * b;
}

vec3 or(vec3 a, vec3 b) {
  return min(a + b, 1.0);
}

vec3 Not(vec3 a) {
  return 1.0 - a;
}

vec2 and(vec2 a, vec2 b) {
  return a * b;
}

vec2 or(vec2 a, vec2 b) {
  return min(a + b, 1.0);
}


vec2 Not(vec2 a) {
  return 1.0 - a;
}

float and(float a, float b) {
  return a * b;
}

float or(float a, float b) {
  return min(a + b, 1.0);
}

float Not(float a) {
  return 1.0 - a;
}{@}curl.glsl{@}#test Device.mobile
float sinf2(float x) {
    x*=0.159155;
    x-=floor(x);
    float xx=x*x;
    float y=-6.87897;
    y=y*xx+33.7755;
    y=y*xx-72.5257;
    y=y*xx+80.5874;
    y=y*xx-41.2408;
    y=y*xx+6.28077;
    return x*y;
}

float cosf2(float x) {
    return sinf2(x+1.5708);
}
#endtest

#test !Device.mobile
    #define sinf2 sin
    #define cosf2 cos
#endtest

float potential1(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.x * 1.8 + v.z * 3.) + sinf2(v.x * 4.8 + v.z * 4.5) + sinf2(v.x * -7.0 + v.z * 1.2) + sinf2(v.x * -5.0 + v.z * 2.13);
    noise += sinf2(v.y * -0.48 + v.z * 5.4) + sinf2(v.y * 2.56 + v.z * 5.4) + sinf2(v.y * 4.16 + v.z * 2.4) + sinf2(v.y * -4.16 + v.z * 1.35);
    return noise;
}

float potential2(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.y * 1.8 + v.x * 3. - 2.82) + sinf2(v.y * 4.8 + v.x * 4.5 + 74.37) + sinf2(v.y * -7.0 + v.x * 1.2 - 256.72) + sinf2(v.y * -5.0 + v.x * 2.13 - 207.683);
    noise += sinf2(v.z * -0.48 + v.x * 5.4 -125.796) + sinf2(v.z * 2.56 + v.x * 5.4 + 17.692) + sinf2(v.z * 4.16 + v.x * 2.4 + 150.512) + sinf2(v.z * -4.16 + v.x * 1.35 - 222.137);
    return noise;
}

float potential3(vec3 v) {
    float noise = 0.0;
    noise += sinf2(v.z * 1.8 + v.y * 3. - 194.58) + sinf2(v.z * 4.8 + v.y * 4.5 - 83.13) + sinf2(v.z * -7.0 + v.y * 1.2 -845.2) + sinf2(v.z * -5.0 + v.y * 2.13 - 762.185);
    noise += sinf2(v.x * -0.48 + v.y * 5.4 - 707.916) + sinf2(v.x * 2.56 + v.y * 5.4 + -482.348) + sinf2(v.x * 4.16 + v.y * 2.4 + 9.872) + sinf2(v.x * -4.16 + v.y * 1.35 - 476.747);
    return noise;
}

vec3 snoiseVec3( vec3 x ) {
    float s  = potential1(x);
    float s1 = potential2(x);
    float s2 = potential3(x);
    return vec3( s , s1 , s2 );
}

//Analitic derivatives of the potentials for the curl noise, based on: http://weber.itn.liu.se/~stegu/TNM084-2019/bridson-siggraph2007-curlnoise.pdf

float dP3dY(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.z * 1.8 + v.y * 3. - 194.58) + 4.5 * cosf2(v.z * 4.8 + v.y * 4.5 - 83.13) + 1.2 * cosf2(v.z * -7.0 + v.y * 1.2 -845.2) + 2.13 * cosf2(v.z * -5.0 + v.y * 2.13 - 762.185);
    noise += 5.4 * cosf2(v.x * -0.48 + v.y * 5.4 - 707.916) + 5.4 * cosf2(v.x * 2.56 + v.y * 5.4 + -482.348) + 2.4 * cosf2(v.x * 4.16 + v.y * 2.4 + 9.872) + 1.35 * cosf2(v.x * -4.16 + v.y * 1.35 - 476.747);
    return noise;
}

float dP2dZ(vec3 v) {
    return -0.48 * cosf2(v.z * -0.48 + v.x * 5.4 -125.796) + 2.56 * cosf2(v.z * 2.56 + v.x * 5.4 + 17.692) + 4.16 * cosf2(v.z * 4.16 + v.x * 2.4 + 150.512) -4.16 * cosf2(v.z * -4.16 + v.x * 1.35 - 222.137);
}

float dP1dZ(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.x * 1.8 + v.z * 3.) + 4.5 * cosf2(v.x * 4.8 + v.z * 4.5) + 1.2 * cosf2(v.x * -7.0 + v.z * 1.2) + 2.13 * cosf2(v.x * -5.0 + v.z * 2.13);
    noise += 5.4 * cosf2(v.y * -0.48 + v.z * 5.4) + 5.4 * cosf2(v.y * 2.56 + v.z * 5.4) + 2.4 * cosf2(v.y * 4.16 + v.z * 2.4) + 1.35 * cosf2(v.y * -4.16 + v.z * 1.35);
    return noise;
}

float dP3dX(vec3 v) {
    return -0.48 * cosf2(v.x * -0.48 + v.y * 5.4 - 707.916) + 2.56 * cosf2(v.x * 2.56 + v.y * 5.4 + -482.348) + 4.16 * cosf2(v.x * 4.16 + v.y * 2.4 + 9.872) -4.16 * cosf2(v.x * -4.16 + v.y * 1.35 - 476.747);
}

float dP2dX(vec3 v) {
    float noise = 0.0;
    noise += 3. * cosf2(v.y * 1.8 + v.x * 3. - 2.82) + 4.5 * cosf2(v.y * 4.8 + v.x * 4.5 + 74.37) + 1.2 * cosf2(v.y * -7.0 + v.x * 1.2 - 256.72) + 2.13 * cosf2(v.y * -5.0 + v.x * 2.13 - 207.683);
    noise += 5.4 * cosf2(v.z * -0.48 + v.x * 5.4 -125.796) + 5.4 * cosf2(v.z * 2.56 + v.x * 5.4 + 17.692) + 2.4 * cosf2(v.z * 4.16 + v.x * 2.4 + 150.512) + 1.35 * cosf2(v.z * -4.16 + v.x * 1.35 - 222.137);
    return noise;
}

float dP1dY(vec3 v) {
    return -0.48 * cosf2(v.y * -0.48 + v.z * 5.4) + 2.56 * cosf2(v.y * 2.56 + v.z * 5.4) +  4.16 * cosf2(v.y * 4.16 + v.z * 2.4) -4.16 * cosf2(v.y * -4.16 + v.z * 1.35);
}


vec3 curlNoise( vec3 p ) {

    //A sinf2 or cosf2 call is a trigonometric function, these functions are expensive in the GPU
    //the partial derivatives with approximations require to calculate the snoiseVec3 function 4 times.
    //The previous function evaluate the potentials that include 8 trigonometric functions each.
    //
    //This means that the potentials are evaluated 12 times (4 calls to snoiseVec3 that make 3 potential calls).
    //The whole process call 12 * 8 trigonometric functions, a total of 96 times.


    /*
    const float e = 1e-1;
    vec3 dx = vec3( e   , 0.0 , 0.0 );
    vec3 dy = vec3( 0.0 , e   , 0.0 );
    vec3 dz = vec3( 0.0 , 0.0 , e   );
    vec3 p0 = snoiseVec3(p);
    vec3 p_x1 = snoiseVec3( p + dx );
    vec3 p_y1 = snoiseVec3( p + dy );
    vec3 p_z1 = snoiseVec3( p + dz );
    float x = p_y1.z - p0.z - p_z1.y + p0.y;
    float y = p_z1.x - p0.x - p_x1.z + p0.z;
    float z = p_x1.y - p0.y - p_y1.x + p0.x;
    return normalize( vec3( x , y , z ));
    */


    //The noise that is used to define the potentials is based on analitic functions that are easy to derivate,
    //meaning that the analitic solution would provide a much faster approach with the same visual results.
    //
    //Usinf2g the analitic derivatives the algorithm does not require to evaluate snoiseVec3, instead it uses the
    //analitic partial derivatives from each potential on the corresponding axis, providing a total of
    //36 calls to trigonometric functions, making the analytic evaluation almost 3 times faster than the aproximation method.


    float x = dP3dY(p) - dP2dZ(p);
    float y = dP1dZ(p) - dP3dX(p);
    float z = dP2dX(p) - dP1dY(p);


    return normalize( vec3( x , y , z ));



}{@}eases.glsl{@}#ifndef PI
#define PI 3.141592653589793
#endif

#ifndef HALF_PI
#define HALF_PI 1.5707963267948966
#endif

float backInOut(float t) {
  float f = t < 0.5
    ? 2.0 * t
    : 1.0 - (2.0 * t - 1.0);

  float g = pow(f, 3.0) - f * sin(f * PI);

  return t < 0.5
    ? 0.5 * g
    : 0.5 * (1.0 - g) + 0.5;
}

float backIn(float t) {
  return pow(t, 3.0) - t * sin(t * PI);
}

float backOut(float t) {
  float f = 1.0 - t;
  return 1.0 - (pow(f, 3.0) - f * sin(f * PI));
}

float bounceOut(float t) {
  const float a = 4.0 / 11.0;
  const float b = 8.0 / 11.0;
  const float c = 9.0 / 10.0;

  const float ca = 4356.0 / 361.0;
  const float cb = 35442.0 / 1805.0;
  const float cc = 16061.0 / 1805.0;

  float t2 = t * t;

  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72;
}

float bounceIn(float t) {
  return 1.0 - bounceOut(1.0 - t);
}

float bounceInOut(float t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;
}

float circularInOut(float t) {
  return t < 0.5
    ? 0.5 * (1.0 - sqrt(1.0 - 4.0 * t * t))
    : 0.5 * (sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
}

float circularIn(float t) {
  return 1.0 - sqrt(1.0 - t * t);
}

float circularOut(float t) {
  return sqrt((2.0 - t) * t);
}

float cubicInOut(float t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
}

float cubicIn(float t) {
  return t * t * t;
}

float cubicOut(float t) {
  float f = t - 1.0;
  return f * f * f + 1.0;
}

float elasticInOut(float t) {
  return t < 0.5
    ? 0.5 * sin(+13.0 * HALF_PI * 2.0 * t) * pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * sin(-13.0 * HALF_PI * ((2.0 * t - 1.0) + 1.0)) * pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;
}

float elasticIn(float t) {
  return sin(13.0 * t * HALF_PI) * pow(2.0, 10.0 * (t - 1.0));
}

float elasticOut(float t) {
  return sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -10.0 * t) + 1.0;
}

float expoInOut(float t) {
  return t == 0.0 || t == 1.0
    ? t
    : t < 0.5
      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;
}

float expoIn(float t) {
  return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));
}

float expoOut(float t) {
  return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);
}

float linear(float t) {
  return t;
}

float quadraticInOut(float t) {
  float p = 2.0 * t * t;
  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

float quadraticIn(float t) {
  return t * t;
}

float quadraticOut(float t) {
  return -t * (t - 2.0);
}

float quarticInOut(float t) {
  return t < 0.5
    ? +8.0 * pow(t, 4.0)
    : -8.0 * pow(t - 1.0, 4.0) + 1.0;
}

float quarticIn(float t) {
  return pow(t, 4.0);
}

float quarticOut(float t) {
  return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
}

float qinticInOut(float t) {
  return t < 0.5
    ? +16.0 * pow(t, 5.0)
    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;
}

float qinticIn(float t) {
  return pow(t, 5.0);
}

float qinticOut(float t) {
  return 1.0 - (pow(t - 1.0, 5.0));
}

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}

float sineIn(float t) {
  return sin((t - 1.0) * HALF_PI) + 1.0;
}

float sineOut(float t) {
  return sin(t * HALF_PI);
}
{@}ColorMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 color;

#!VARYINGS

#!SHADER: ColorMaterial.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: ColorMaterial.fs
void main() {
    gl_FragColor = vec4(color, 1.0);
}{@}DebugCamera.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS
varying vec3 vColor;

#!SHADER: DebugCamera.vs
void main() {
    vColor = mix(uColor, vec3(1.0, 0.0, 0.0), step(position.z, -0.1));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: DebugCamera.fs
void main() {
    gl_FragColor = vec4(vColor, 1.0);
}{@}ScreenQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: ScreenQuad.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: ScreenQuad.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a = 1.0;
}{@}TestMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float alpha;

#!VARYINGS
varying vec3 vNormal;

#!SHADER: TestMaterial.vs
void main() {
    vec3 pos = position;
    vNormal = normalMatrix * normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: TestMaterial.fs
void main() {
    gl_FragColor = vec4(vNormal, 1.0);
}{@}TextureMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: TextureMaterial.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: TextureMaterial.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.rgb /= gl_FragColor.a;
}{@}BlitPass.fs{@}void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);
    gl_FragColor.a = 1.0;
}{@}NukePass.vs{@}varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}{@}ShadowDepth.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: ShadowDepth.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: ShadowDepth.fs
void main() {
    gl_FragColor = vec4(vec3(gl_FragCoord.x), 1.0);
}{@}instance.vs{@}vec3 transformNormal(vec3 n, vec4 orientation) {
    vec3 nn = n + 2.0 * cross(orientation.xyz, cross(orientation.xyz, n) + orientation.w * n);
    return nn;
}

vec3 transformPosition(vec3 position, vec3 offset, vec3 scale, vec4 orientation) {
    vec3 _pos = position;
    _pos *= scale;

    _pos = _pos + 2.0 * cross(orientation.xyz, cross(orientation.xyz, _pos) + orientation.w * _pos);
    _pos += offset;
    return _pos;
}

vec3 transformPosition(vec3 position, vec3 offset, vec4 orientation) {
    vec3 _pos = position;

    _pos = _pos + 2.0 * cross(orientation.xyz, cross(orientation.xyz, _pos) + orientation.w * _pos);
    _pos += offset;
    return _pos;
}

vec3 transformPosition(vec3 position, vec3 offset, float scale, vec4 orientation) {
    return transformPosition(position, offset, vec3(scale), orientation);
}

vec3 transformPosition(vec3 position, vec3 offset) {
    return position + offset;
}

vec3 transformPosition(vec3 position, vec3 offset, float scale) {
    vec3 pos = position * scale;
    return pos + offset;
}

vec3 transformPosition(vec3 position, vec3 offset, vec3 scale) {
    vec3 pos = position * scale;
    return pos + offset;
}{@}lights.fs{@}vec3 worldLight(vec3 pos, vec3 vpos) {
    vec4 mvPos = modelViewMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}{@}lights.vs{@}vec3 worldLight(vec3 pos) {
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}

vec3 worldLight(vec3 lightPos, vec3 localPos) {
    vec4 mvPos = modelViewMatrix * vec4(localPos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(lightPos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}{@}shadows.fs{@}float shadowCompare(sampler2D map, vec2 coords, float compare) {
    return step(compare, texture2D(map, coords).r);
}

float shadowLerp(sampler2D map, vec2 coords, float compare, float size) {
    const vec2 offset = vec2(0.0, 1.0);

    vec2 texelSize = vec2(1.0) / size;
    vec2 centroidUV = floor(coords * size + 0.5) / size;

    float lb = shadowCompare(map, centroidUV + texelSize * offset.xx, compare);
    float lt = shadowCompare(map, centroidUV + texelSize * offset.xy, compare);
    float rb = shadowCompare(map, centroidUV + texelSize * offset.yx, compare);
    float rt = shadowCompare(map, centroidUV + texelSize * offset.yy, compare);

    vec2 f = fract( coords * size + 0.5 );

    float a = mix( lb, lt, f.y );
    float b = mix( rb, rt, f.y );
    float c = mix( a, b, f.x );

    return c;
}

float srange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

float shadowrandom(vec3 vin) {
    vec3 v = vin * 0.1;
    float t = v.z * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += srange(sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1), -1.0, 1.0, -0.3, 0.3);
    noise += srange(sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5), -1.0, 1.0, -0.3, 0.3);
    return noise;
}

float shadowLookup(sampler2D map, vec3 coords, float size, float compare, vec3 wpos) {
    float shadow = 1.0;

    #if defined(SHADOW_MAPS)
    bool frustumTest = coords.x >= 0.0 && coords.x <= 1.0 && coords.y >= 0.0 && coords.y <= 1.0 && coords.z <= 1.0;
    if (frustumTest) {
        vec2 texelSize = vec2(1.0) / size;

        float dx0 = -texelSize.x;
        float dy0 = -texelSize.y;
        float dx1 = +texelSize.x;
        float dy1 = +texelSize.y;

        float rnoise = shadowrandom(wpos) * 0.00015;
        dx0 += rnoise;
        dy0 -= rnoise;
        dx1 += rnoise;
        dy1 -= rnoise;

        #if defined(SHADOWS_MED)
        shadow += shadowCompare(map, coords.xy + vec2(0.0, dy0), compare);
        //        shadow += shadowCompare(map, coords.xy + vec2(dx1, dy0), compare);
        shadow += shadowCompare(map, coords.xy + vec2(dx0, 0.0), compare);
        shadow += shadowCompare(map, coords.xy, compare);
        shadow += shadowCompare(map, coords.xy + vec2(dx1, 0.0), compare);
        //        shadow += shadowCompare(map, coords.xy + vec2(dx0, dy1), compare);
        shadow += shadowCompare(map, coords.xy + vec2(0.0, dy1), compare);
        shadow /= 5.0;

        #elif defined(SHADOWS_HIGH)
        shadow = shadowLerp(map, coords.xy + vec2(dx0, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(0.0, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, dy0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx0, 0.0), compare, size);
        shadow += shadowLerp(map, coords.xy, compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, 0.0), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx0, dy1), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(0.0, dy1), compare, size);
        shadow += shadowLerp(map, coords.xy + vec2(dx1, dy1), compare, size);
        shadow /= 9.0;

        #else
        shadow = shadowCompare(map, coords.xy, compare);
        #endif
    }

        #endif

    return clamp(shadow, 0.0, 1.0);
}

#test !!window.Metal
vec3 transformShadowLight(vec3 pos, vec3 vpos, mat4 mvMatrix, mat4 viewMatrix) {
    vec4 mvPos = mvMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return normalize(worldPosition.xyz - mvPos.xyz);
}

float getShadow(vec3 pos, vec3 normal, float bias, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = uniforms.shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);

        lookup = shadowLookup(shadowMap, coords, uniforms.shadowSize[i], coords.z - bias, pos);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(uniforms.shadowLightPos[i], pos, uniforms.modelViewMatrix, globalUniforms.viewMatrix), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }

    #endif
    return shadow;
}

float getShadow(vec3 pos, vec3 normal, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, normal, 0.0, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, float bias, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, vec3(99999.0), bias, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, Uniforms uniforms, GlobalUniforms globalUniforms, sampler2D shadowMap) {
    return getShadow(pos, vec3(99999.0), 0.0, uniforms, globalUniforms, shadowMap);
}

float getShadow(vec3 pos, vec3 normal) {
    return 1.0;
}

float getShadow(vec3 pos, float bias) {
    return 1.0;
}

float getShadow(vec3 pos) {
    return 1.0;
}
#endtest

#test !window.Metal
vec3 transformShadowLight(vec3 pos, vec3 vpos) {
    vec4 mvPos = modelViewMatrix * vec4(vpos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(pos, 1.0);
    return normalize(worldPosition.xyz - mvPos.xyz);
}

float getShadow(vec3 pos, vec3 normal, float bias) {
    float shadow = 1.0;
    #if defined(SHADOW_MAPS)

    vec4 shadowMapCoords;
    vec3 coords;
    float lookup;

    #pragma unroll_loop
    for (int i = 0; i < SHADOW_COUNT; i++) {
        shadowMapCoords = shadowMatrix[i] * vec4(pos, 1.0);
        coords = (shadowMapCoords.xyz / shadowMapCoords.w) * vec3(0.5) + vec3(0.5);

        lookup = shadowLookup(shadowMap[i], coords, shadowSize[i], coords.z - bias, pos);
        lookup += mix(1.0 - step(0.002, dot(transformShadowLight(shadowLightPos[i], pos), normal)), 0.0, step(999.0, normal.x));
        shadow *= clamp(lookup, 0.0, 1.0);
    }

    #endif
    return shadow;
}

float getShadow(vec3 pos, vec3 normal) {
    return getShadow(pos, normal, 0.0);
}

float getShadow(vec3 pos, float bias) {
    return getShadow(pos, vec3(99999.0), bias);
}

float getShadow(vec3 pos) {
    return getShadow(pos, vec3(99999.0), 0.0);
}
#endtest{@}fresnel.glsl{@}float getFresnel(vec3 normal, vec3 viewDir, float power) {
    float d = dot(normalize(normal), normalize(viewDir));
    return 1.0 - pow(abs(d), power);
}

//viewDir = -vec3(modelViewMatrix * vec4(position, 1.0));{@}FXAA.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMask;

#!VARYINGS
varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

#!SHADER: FXAA.vs

varying vec2 vUv;

void main() {
    vUv = uv;

    vec2 fragCoord = uv * resolution;
    vec2 inverseVP = 1.0 / resolution.xy;
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);

    gl_Position = vec4(position, 1.0);
}

#!SHADER: FXAA.fs

#require(conditionals.glsl)

#ifndef FXAA_REDUCE_MIN
    #define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
    #define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
    #define FXAA_SPAN_MAX     8.0
#endif

vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,
            vec2 v_rgbNW, vec2 v_rgbNE,
            vec2 v_rgbSW, vec2 v_rgbSE,
            vec2 v_rgbM) {
    vec4 color;
    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
              dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);

    color = vec4(rgbB, texColor.a);
    color = mix(color, vec4(rgbA, texColor.a), when_lt(lumaB, lumaMin));
    color = mix(color, vec4(rgbA, texColor.a), when_gt(lumaB, lumaMax));

    return color;
}

void main() {
    vec2 fragCoord = vUv * resolution;
    float mask = texture2D(tMask, vUv).r;
    if (mask < 0.5) {
        gl_FragColor = fxaa(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
    } else {
        gl_FragColor = texture2D(tDiffuse, vUv);
    }
    gl_FragColor.a = 1.0;
}
{@}glscreenprojection.glsl{@}vec2 frag_coord(vec4 glPos) {
    return ((glPos.xyz / glPos.w) * 0.5 + 0.5).xy;
}

vec2 getProjection(vec3 pos, mat4 projMatrix) {
    vec4 mvpPos = projMatrix * vec4(pos, 1.0);
    return frag_coord(mvpPos);
}

void applyNormal(inout vec3 pos, mat4 projNormalMatrix) {
    vec3 transformed = vec3(projNormalMatrix * vec4(pos, 0.0));
    pos = transformed;
}{@}DefaultText.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS

varying vec2 vUv;

#!SHADER: DefaultText.vs

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: DefaultText.fs

#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha;
}
{@}msdf.glsl{@}float msdf(vec3 tex, vec2 uv) {
    // TODO: fallback for fwidth for webgl1 (need to enable ext)
    float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
    float d = fwidth(signedDist);
    float alpha = smoothstep(-d, d, signedDist);
    if (alpha < 0.01) discard;
    return alpha;
}

float msdf(sampler2D tMap, vec2 uv) {
    vec3 tex = texture2D(tMap, uv).rgb;
    return msdf( tex, uv );
}

float strokemsdf(sampler2D tMap, vec2 uv, float stroke, float padding) {
    vec3 tex = texture2D(tMap, uv).rgb;
    float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
    float t = stroke;
    float alpha = smoothstep(-t, -t + padding, signedDist) * smoothstep(t, t - padding, signedDist);
    return alpha;
}{@}GLUIBatch.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec2 scale;
attribute float rotation;
//attributes

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
//varyings

#!SHADER: Vertex

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

void main() {
    vUv = uv;
    //vdefines

    vec3 pos = vec3(rotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(position, 1.0));
    pos.xy *= scale;
    pos.xyz += offset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(1.0);
}{@}GLUIBatchText.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec2 scale;
attribute float rotation;
//attributes

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
//varyings

#!SHADER: Vertex

mat4 lrotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

void main() {
    vUv = uv;
    //vdefines

    vec3 pos = vec3(lrotationMatrix(vec3(0.0, 0.0, 1.0), rotation) * vec4(position, 1.0));

    //custommain

    pos.xy *= scale;
    pos += offset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);

    gl_FragColor.rgb = v_uColor;
    gl_FragColor.a = alpha * v_uAlpha;
}
{@}GLUIColor.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: GLUIColor.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: GLUIColor.fs
void main() {
    vec2 uv = vUv;
    vec3 uvColor = vec3(uv, 1.0);
    gl_FragColor = vec4(mix(uColor, uvColor, 0.0), uAlpha);
}{@}GLUIObject.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: GLUIObject.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: GLUIObject.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a *= uAlpha;
}{@}GLUIObjectMask.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform vec4 mask;

#!VARYINGS
varying vec2 vUv;
varying vec2 vWorldPos;

#!SHADER: GLUIObjectMask.vs
void main() {
    vUv = uv;
    vWorldPos = (modelMatrix * vec4(position.xy, 0.0, 1.0)).xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: GLUIObjectMask.fs
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a *= uAlpha;

    if (vWorldPos.x > mask.x + mask.z) discard;
    if (vWorldPos.x < mask.x) discard;
    if (vWorldPos.y > mask.y) discard;
    if (vWorldPos.y < mask.y - mask.w) discard;
}{@}gluimask.fs{@}uniform vec4 uMaskValues;

#require(range.glsl)

vec2 getMaskUV() {
    vec2 ores = gl_FragCoord.xy / resolution;
    vec2 uv;
    uv.x = range(ores.x, uMaskValues.x, uMaskValues.z, 0.0, 1.0);
    uv.y = 1.0 - range(1.0 - ores.y, uMaskValues.y, uMaskValues.w, 0.0, 1.0);
    return uv;
}{@}matcap.vs{@}vec2 reflectMatcap(vec3 position, mat4 modelViewMatrix, mat3 normalMatrix, vec3 normal) {
    vec4 p = vec4(position, 1.0);
    
    vec3 e = normalize(vec3(modelViewMatrix * p));
    vec3 n = normalize(normalMatrix * normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
        pow(r.x, 2.0) +
        pow(r.y, 2.0) +
        pow(r.z + 1.0, 2.0)
    );
    
    vec2 uv = r.xy / m + .5;
    
    return uv;
}

vec2 reflectMatcap(vec3 position, mat4 modelViewMatrix, vec3 normal) {
    vec4 p = vec4(position, 1.0);
    
    vec3 e = normalize(vec3(modelViewMatrix * p));
    vec3 n = normalize(normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
                         pow(r.x, 2.0) +
                         pow(r.y, 2.0) +
                         pow(r.z + 1.0, 2.0)
                         );
    
    vec2 uv = r.xy / m + .5;
    
    return uv;
}

vec2 reflectMatcap(vec4 mvPos, vec3 normal) {
    vec3 e = normalize(vec3(mvPos));
    vec3 n = normalize(normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
                         pow(r.x, 2.0) +
                         pow(r.y, 2.0) +
                         pow(r.z + 1.0, 2.0)
                         );

    vec2 uv = r.xy / m + .5;

    return uv;
}{@}MouseFlowMapBlend.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D uTexture;
uniform sampler2D uStamp;
uniform float uSpeed;
uniform float uFirstDraw;

#!VARYINGS

varying vec2 vUv;

#!SHADER: MouseFlowMapBlend.vs

void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: MouseFlowMapBlend.fs

vec3 blend(vec3 base, vec3 blend, float opacity) {
    return blend + (base * (1.0 - opacity));
}

#require(range.glsl)

void main() {
    vec3 prev = texture2D(uTexture, vUv).rgb;
    prev = prev * 2.0 - 1.0;
    float amount = crange(length(prev.rg), 0.0, 0.4, 0.0, 1.0);
    amount = 0.5 + 0.48 * (1.0 - pow(1.0 - amount, 3.0));
    prev *= amount;
    prev = prev * 0.5 + 0.5;

    // blue not used
    prev.b = 0.5;

    vec4 tex = texture2D(uStamp, vUv);
    gl_FragColor.rgb = blend(prev, tex.rgb, tex.a);

    // Force a grey on first draw to have init values
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.5), uFirstDraw);
    gl_FragColor.a = 1.0;
}
{@}MouseFlowMapStamp.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform vec2 uVelocity;
uniform float uFalloff;
uniform float uAlpha;
uniform float uAspect;

#!VARYINGS

varying vec2 vUv;

#!SHADER: MouseFlowMapStamp.vs

void main() {
    vUv = uv;
    vec3 pos = position;
    pos.x *= 1.0 / uAspect;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

    #!SHADER: MouseFlowMapStamp.fs

void main() {
    gl_FragColor.rgb = vec3(uVelocity * 0.5 + 0.5, 1.0);
    gl_FragColor.a = smoothstep(0.5, 0.499 - (uFalloff * 0.499), length(vUv - 0.5)) * uAlpha;
}
{@}flowmap.fs{@}float getFlowMask(sampler2D map, vec2 uv) {
    vec2 flow = texture2D(map, uv).rg;
    return clamp(length(flow.rg * 2.0 - 1.0), 0.0, 1.0);
}

vec2 getFlow(sampler2D map, vec2 uv) {
    vec2 flow = texture2D(map, uv).rg * 2.0 - 1.0;
    flow.y *= -1.0;
    return flow;
}{@}PBR.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: PBR.vs

#require(pbr.vs)

void main() {
    setupPBR(position);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: PBR.fs

#require(pbr.fs)

void main() {
    gl_FragColor = getPBR();
}{@}pbr.fs{@}uniform sampler2D tBaseColor;
uniform vec2 uEnv;

uniform sampler2D tMRO;
uniform vec3 uMRO;

uniform sampler2D tNormal;
uniform vec2 uNormalScale;

uniform sampler2D tLUT;
uniform sampler2D tEnvDiffuse;
uniform sampler2D tEnvSpecular;
uniform float uHDR;

uniform vec4 uLight;

const float PI = 3.14159265359;
const float PI2 = 6.28318530718;
const float RECIPROCAL_PI = 0.31830988618;
const float RECIPROCAL_PI2 = 0.15915494;
const float LOG2 = 1.442695;
const float EPSILON = 1e-6;
const float LN2 = 0.6931472;

const float ENV_LODS = 7.0;

struct PBRConfig {
    float reflection;
    float darken;
    vec3 color;
};

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;

vec4 SRGBtoLinear(vec4 srgb) {
    vec3 linOut = pow(srgb.xyz, vec3(2.2));
    return vec4(linOut, srgb.w);
}

vec4 RGBEToLinear(vec4 value) {
    return vec4(value.rgb * exp2(value.a * 255.0 - 128.0), 1.0);
}

vec4 RGBMToLinear(vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec4 RGBDToLinear(vec4 value, float maxRange) {
    return vec4(value.rgb * ((maxRange / 255.0) / value.a), 1.0);
}

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(1.0 / 2.2));
}

vec3 getNormal(vec2 uNormalScale, sampler2D tNormal /*, sampler tNormalSampler*/, vec2 vUv, vec3 vNormal, vec3 vMPos) {
    vec3 pos_dx = vec3(dFdx(vMPos.x), dFdx(vMPos.y), dFdx(vMPos.z));
    vec3 pos_dy = vec3(dFdy(vMPos.x), dFdy(vMPos.y), dFdy(vMPos.z));
    vec3 tex_dx = vec3(dFdx(vUv.x), dFdx(vUv.y), dFdx(0.0));
    vec3 tex_dy = vec3(dFdy(vUv.x), dFdy(vUv.y), dFdy(0.0));
    vec3 t = (tex_dy.y * pos_dx - tex_dx.y * pos_dy) / (tex_dx.x * tex_dy.y - tex_dy.x * tex_dx.y);

    vec3 ng = normalize(vNormal);

    t = normalize(t - ng * dot(ng, t));
    vec3 b = normalize(cross(ng, t));
    mat3 tbn = mat3(t, b, ng);

    vec3 n = texture2D(tNormal, vUv * uNormalScale.y).rgb;
    n = normalize(tbn * ((2.0 * n - 1.0) * vec3(uNormalScale.x, uNormalScale.x, 1.0)));

    return n;
}

vec3 specularReflection(vec3 specularEnvR0, vec3 specularEnvR90, float VdH) {
    return specularEnvR0 + (specularEnvR90 - specularEnvR0) * pow(clamp(1.0 - VdH, 0.0, 1.0), 5.0);
}

float geometricOcclusion(float NdL, float NdV, float roughness) {
    float r = roughness;
    float attenuationL = 2.0 * NdL / (NdL + sqrt(r * r + (1.0 - r * r) * (NdL * NdL)));
    float attenuationV = 2.0 * NdV / (NdV + sqrt(r * r + (1.0 - r * r) * (NdV * NdV)));
    return attenuationL * attenuationV;
}

float microfacetDistribution(float roughness, float NdH) {
    float roughnessSq = roughness * roughness;
    float f = (NdH * roughnessSq - NdH) * NdH + 1.0;
    return roughnessSq / (PI * f * f);
}

vec3 inverseTformDir(in vec3 dir, in mat4 matrix) {
    return normalize((vec4(dir, 0.0) * matrix).xyz);
}

float prange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

float pcrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(prange(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));
}

vec2 cartesianToPolar(vec3 n, vec3 vMPos, vec3 cameraPosition, mat4 viewMatrix) {
    vec3 cameraToVertex = normalize(vMPos - cameraPosition);
    vec3 worldNormal = inverseTformDir(normalize(n), viewMatrix);
    vec3 reflectVec = normalize(reflect(cameraToVertex, worldNormal));
    vec3 reflectView = normalize((viewMatrix * vec4( reflectVec, 0.0)).xyz + vec3(0.0, 0.0, 1.0));
    return reflectView.xy * 0.5 + 0.5;
}

vec4 autoToLinear(vec4 texel, float uHDR) {
    vec4 rgbm = RGBMToLinear(texel);
    vec4 srgb = SRGBtoLinear(texel);
    return mix(srgb, rgbm, uHDR);
}

vec3 getIBLContribution(float NdV, float roughness, vec3 n, vec3 reflection, vec3 diffuseColor, vec3 specularColor, PBRConfig config, vec3 cameraPosition, mat4 viewMatrix, vec2 vUv, vec3 vMPos, vec2 uEnv, float uHDR, sampler2D tLUT, /*sampler tLUTSampler,*/ sampler2D tEnvDiffuse, /*sampler tEnvDiffuseSampler,*/ sampler2D tEnvSpecular /*, sampler tEnvSpecularSampler*/) {
    vec2 lutUV = vec2(NdV, roughness);
    vec2 diffuseUV = cartesianToPolar(n, vMPos, cameraPosition, viewMatrix);

    #test !!window.Metal
    lutUV.y = 1.0 - lutUV.y;
    diffuseUV.y = 1.0 - diffuseUV.y;
    #endtest

    vec3 brdf = SRGBtoLinear(texture2D(tLUT, lutUV)).rgb;
    vec3 diffuseLight = autoToLinear( texture2D(tEnvDiffuse, diffuseUV ), uHDR).rgb;

    // Sample 2 levels and mix between to get smoother degradation
    float blend = roughness * ENV_LODS;
    float level0 = floor(blend);
    float level1 = min(ENV_LODS, level0 + 1.0);
    blend -= level0;

    // Sample the specular env map atlas depending on the roughness value
    vec2 uvSpec = diffuseUV;
    uvSpec.y /= 2.0;

    vec2 uv0 = uvSpec;
    vec2 uv1 = uvSpec;

    uv0 /= pow(2.0, level0);
    uv0.y += 1.0 - exp(-LN2 * level0);

    uv1 /= pow(2.0, level1);
    uv1.y += 1.0 - exp(-LN2 * level1);

    #test !!window.Metal
    uv0.y = 1.0 - uv0.y;
    uv1.y = 1.0 - uv1.y;
    #endtest

    vec3 specular0 = autoToLinear(texture2D(tEnvSpecular, uv0), uHDR).rgb;
    vec3 specular1 = autoToLinear(texture2D(tEnvSpecular, uv1), uHDR).rgb;
    vec3 specularLight = mix(specular0, specular1, blend);

    vec3 diffuse = diffuseLight * diffuseColor;
    vec3 specular = specularLight * (specularColor * brdf.x + brdf.y);

    // A value to be able to push the strength and mimic HDR
    specular *= (1.0 + uEnv.y * specularLight) * config.reflection;
    return diffuse + specular;
}

vec3 calculatePBR(vec3 baseColor, PBRConfig config, vec3 cameraPosition, mat4 viewMatrix, vec2 vUv, vec3 vNormal, vec3 vMPos, vec2 uEnv, vec3 uMRO, vec2 uNormalScale, float uHDR, vec4 uLight, sampler2D tMRO, /*sampler tMROSampler,*/ sampler2D tNormal, /*sampler tNormalSampler,*/ sampler2D tLUT, /*sampler tLUTSampler,*/ sampler2D tEnvDiffuse, /*sampler tEnvDiffuseSampler,*/ sampler2D tEnvSpecular /*, sampler tEnvSpecularSampler*/) {
    // rgb = [metallic, roughness, occlusion] - still have a available
    vec4 mroSample = texture2D(tMRO, vUv);
    float metallic = clamp(mroSample.r * uMRO.x, 0.04, 1.0);
    float roughness = clamp(mroSample.g * uMRO.y, 0.04, 1.0);

    vec3 diffuseColor = baseColor * 0.96 * (1.0 - metallic);
    vec3 specularColor = mix(vec3(0.04), baseColor, metallic);

    float reflectance = max(max(specularColor.r, specularColor.g), specularColor.b);
    float reflectance90 = clamp(reflectance * 25.0, 0.0, 1.0);
    vec3 specularEnvR0 = specularColor.rgb;
    vec3 specularEnvR90 = vec3(reflectance90);

    vec3 N = getNormal(uNormalScale, tNormal, vUv, vNormal, vMPos);
    vec3 V = normalize(cameraPosition - vMPos);
    vec3 L = normalize(uLight.xyz);
    vec3 H = normalize(L + V);
    vec3 reflection = -normalize(reflect(V, N));

    float NdL = pcrange(clamp(dot(N, L), 0.001, 1.0), 0.0, 1.0, 0.4, 1.0);
    float NdV = pcrange(clamp(abs(dot(N, V)), 0.001, 1.0), 0.0, 1.0, 0.4, 1.0);
    float NdH = clamp(dot(N, H), 0.0, 1.0);
//    float LdH = clamp(dot(L, H), 0.0, 1.0);
    float VdH = clamp(dot(V, H), 0.0, 1.0);

    vec3 F = specularReflection(specularEnvR0, specularEnvR90, VdH);
    float G = geometricOcclusion(NdL, NdV, roughness);
    float D = microfacetDistribution(roughness, NdH);

    vec3 diffuseContrib = (1.0 - F) * (diffuseColor / PI);
    vec3 specContrib = F * G * D / (4.0 * NdL * NdV) * uLight.w;
    vec3 color = NdL * (diffuseContrib + specContrib) * config.darken;

    color += getIBLContribution(NdV, roughness, N, reflection, diffuseColor, specularColor, config, cameraPosition, viewMatrix, vUv, vMPos, uEnv, uHDR, tLUT, /*tLUTSampler,*/ tEnvDiffuse, /*tEnvDiffuseSampler,*/ tEnvSpecular /*, tEnvSpecularSampler*/) * config.color * uEnv.x;

    return mix(color, color * mroSample.b, uMRO.z);
}

vec4 getPBR() {
    PBRConfig config;
    config.reflection = 1.0;
    config.darken = 1.0;
    config.color = vec3(1.0);

    vec4 baseColor = SRGBtoLinear(texture2D(tBaseColor, vUv));
    vec3 color = calculatePBR(baseColor.rgb, config, cameraPosition, viewMatrix, vUv, vNormal, vMPos, uEnv, uMRO, uNormalScale, uHDR, uLight, tMRO, /*tMROSampler,*/ tNormal, /*tNormalSampler,*/ tLUT, /*tLUTSampler,*/ tEnvDiffuse, /*tEnvDiffuseSampler,*/ tEnvSpecular /*, tEnvSpecularSampler*/);
    return vec4(linearToSRGB(color), baseColor.a);
}

vec4 getPBR(PBRConfig config) {
    vec4 baseColor = SRGBtoLinear(texture2D(tBaseColor, vUv));
    vec3 color = calculatePBR(baseColor.rgb, config, cameraPosition, viewMatrix, vUv, vNormal, vMPos, uEnv, uMRO, uNormalScale, uHDR, uLight, tMRO, /*tMROSampler,*/ tNormal, /*tNormalSampler,*/ tLUT, /*tLUTSampler,*/ tEnvDiffuse, /*tEnvDiffuseSampler,*/ tEnvSpecular /*, tEnvSpecularSampler*/);
    return vec4(linearToSRGB(color), baseColor.a);
}

vec4 getPBR(vec3 inputColor) {
    PBRConfig config;
    config.reflection = 1.0;
    config.darken = 1.0;
    config.color = vec3(1.0);

    vec3 color = calculatePBR(SRGBtoLinear(vec4(inputColor, 1.0)).rgb, config, cameraPosition, viewMatrix, vUv, vNormal, vMPos, uEnv, uMRO, uNormalScale, uHDR, uLight, tMRO, /*tMROSampler,*/ tNormal, /*tNormalSampler,*/ tLUT, /*tLUTSampler,*/ tEnvDiffuse, /*tEnvDiffuseSampler,*/ tEnvSpecular /*, tEnvSpecularSampler*/);
    return vec4(linearToSRGB(color), 1.0);
}

vec4 getPBR(vec3 inputColor, PBRConfig config) {
    vec3 color = calculatePBR(SRGBtoLinear(vec4(inputColor, 1.0)).rgb, config, cameraPosition, viewMatrix, vUv, vNormal, vMPos, uEnv, uMRO, uNormalScale, uHDR, uLight, tMRO, /*tMROSampler,*/ tNormal, /*tNormalSampler,*/ tLUT, /*tLUTSampler,*/ tEnvDiffuse, /*tEnvDiffuseSampler,*/ tEnvSpecular /*, tEnvSpecularSampler*/);
    return vec4(linearToSRGB(color), 1.0);
}{@}pbr.vs{@}uniform sampler2D tBaseColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;

void setupPBR(vec3 p0) { //inlinemain
    vUv = uv;
    vec4 mPos = modelMatrix * vec4(p0, 1.0);
    vMPos = mPos.xyz / mPos.w;
    vNormal = normalMatrix * normal;
}{@}range.glsl{@}

float range(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    vec3 sub = vec3(oldValue, newMax, oldMax) - vec3(oldMin, newMin, oldMin);
    return sub.x * sub.y / sub.z + newMin;
}

vec2 range(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    vec2 oldRange = oldMax - oldMin;
    vec2 newRange = newMax - newMin;
    vec2 val = oldValue - oldMin;
    return val * newRange / oldRange + newMin;
}

vec3 range(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    vec3 oldRange = oldMax - oldMin;
    vec3 newRange = newMax - newMin;
    vec3 val = oldValue - oldMin;
    return val * newRange / oldRange + newMin;
}

float crange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

vec2 crange(vec2 oldValue, vec2 oldMin, vec2 oldMax, vec2 newMin, vec2 newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

vec3 crange(vec3 oldValue, vec3 oldMin, vec3 oldMax, vec3 newMin, vec3 newMax) {
    return clamp(range(oldValue, oldMin, oldMax, newMin, newMax), min(newMin, newMax), max(newMin, newMax));
}

float rangeTransition(float t, float x, float padding) {
    float transition = crange(t, 0.0, 1.0, -padding, 1.0 + padding);
    return crange(x, transition - padding, transition + padding, 1.0, 0.0);
}
{@}rgb2hsv.fs{@}vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}{@}simplenoise.glsl{@}float getNoise(vec2 uv, float time) {
    float x = uv.x * uv.y * time * 1000.0;
    x = mod(x, 13.0) * mod(x, 123.0);
    float dx = mod(x, 0.01);
    float amount = clamp(0.1 + dx * 100.0, 0.0, 1.0);
    return amount;
}

highp float getRandom(vec2 co) {
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt = dot(co.xy, vec2(a, b));
    highp float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
}

float cnoise(vec3 v) {
    float t = v.z * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += range(sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1), -1.0, 1.0, -0.3, 0.3);
    noise += range(sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5), -1.0, 1.0, -0.3, 0.3);
    return noise;
}

float cnoise(vec2 v) {
    float t = v.x * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += range(sin(v.x * 0.9 / s + t * 10.0) + sin(v.x * 2.4 / s + t * 15.0) + sin(v.x * -3.5 / s + t * 4.0) + sin(v.x * -2.5 / s + t * 7.1), -1.0, 1.0, -0.3, 0.3);
    noise += range(sin(v.y * -0.3 / s + t * 18.0) + sin(v.y * 1.6 / s + t * 18.0) + sin(v.y * 2.6 / s + t * 8.0) + sin(v.y * -2.6 / s + t * 4.5), -1.0, 1.0, -0.3, 0.3);
    return noise;
}{@}skinning.glsl{@}attribute vec4 skinIndex;
attribute vec4 skinWeight;

uniform sampler2D boneTexture;
uniform float boneTextureSize;

mat4 getBoneMatrix(const in float i) {
    float j = i * 4.0;
    float x = mod(j, boneTextureSize);
    float y = floor(j / boneTextureSize);

    float dx = 1.0 / boneTextureSize;
    float dy = 1.0 / boneTextureSize;

    y = dy * (y + 0.5);

    vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
    vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
    vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
    vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));

    return mat4(v1, v2, v3, v4);
}

void applySkin(inout vec3 pos, inout vec3 normal) {
    mat4 boneMatX = getBoneMatrix(skinIndex.x);
    mat4 boneMatY = getBoneMatrix(skinIndex.y);
    mat4 boneMatZ = getBoneMatrix(skinIndex.z);
    mat4 boneMatW = getBoneMatrix(skinIndex.w);

    mat4 skinMatrix = mat4(0.0);
    skinMatrix += skinWeight.x * boneMatX;
    skinMatrix += skinWeight.y * boneMatY;
    skinMatrix += skinWeight.z * boneMatZ;
    skinMatrix += skinWeight.w * boneMatW;
    normal = vec4(skinMatrix * vec4(normal, 0.0)).xyz;

    vec4 bindPos = vec4(pos, 1.0);
    vec4 transformed = vec4(0.0);
    
    transformed += boneMatX * bindPos * skinWeight.x;
    transformed += boneMatY * bindPos * skinWeight.y;
    transformed += boneMatZ * bindPos * skinWeight.z;
    transformed += boneMatW * bindPos * skinWeight.w;

    pos = transformed.xyz;
}

void applySkin(inout vec3 pos) {
    vec3 normal = vec3(0.0, 1.0, 0.0);
    applySkin(pos, normal);
}{@}transformUV.glsl{@}vec2 translateUV(vec2 uv, vec2 translate) {
    return uv - translate;
}

vec2 rotateUV(vec2 uv, float r, vec2 origin) {
    float c = cos(r);
    float s = sin(r);
    mat2 m = mat2(c, -s, 
                  s, c);
    vec2 st = uv - origin;
    st = m * st;
    return st + origin;
}

vec2 scaleUV(vec2 uv, vec2 scale, vec2 origin) {
    vec2 st = uv - origin;
    st /= scale;
    return st + origin;
}

vec2 rotateUV(vec2 uv, float r) {
    return rotateUV(uv, r, vec2(0.5));
}

vec2 scaleUV(vec2 uv, vec2 scale) {
    return scaleUV(uv, scale, vec2(0.5));
}

vec2 transformUV(vec2 uv, float a[9]) {

    // Array consists of the following
    // 0 translate.x
    // 1 translate.y
    // 2 skew.x
    // 3 skew.y
    // 4 rotate
    // 5 scale.x
    // 6 scale.y
    // 7 origin.x
    // 8 origin.y

    vec2 st = uv;
    
    //Translate
    st -= vec2(a[0], a[1]);

    //Skew
    st = st + st.gr * vec2(a[2], a[3]);

    //Rotate
    st = rotateUV(st, a[4], vec2(a[7], a[8]));

    //Scale
    st = scaleUV(st, vec2(a[5], a[6]), vec2(a[7], a[8]));

    return st;
}{@}VRInputControllerBeam.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS
varying vec2 vUv;

#!SHADER: VRInputControllerBeam.vs
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: VRInputControllerBeam.fs

#require(range.glsl)

void main() {
    vec4 vColor = vec4( uColor, length( vUv.y ));
    gl_FragColor = vColor;
}{@}VRInputControllerBody.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: VRInputControllerBody.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: VRInputControllerBody.fs
void main() {
    gl_FragColor = vec4(1.0);
}{@}VRInputControllerPoint.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uBorderColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: VRInputControllerPoint.vs
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: VRInputControllerPoint.fs

const float borderWidth = 0.08;

void main() {
    vec2 uv = vUv * (2. + borderWidth * 4.) - (1. + borderWidth * 2.); // -1.0 ... 1.0
    float r = length(uv);

    // border
    float dist = abs(r-(1. - borderWidth));
    float delta = fwidth(dist);
    float alpha = 1.0 - smoothstep(-delta, delta, dist - borderWidth);
    vec4 border = vec4(uBorderColor, alpha);

    // fill
    dist = r-(1. - borderWidth);
    delta = fwidth(dist);
    float limit = borderWidth * 0.5;
    alpha = 1.0 - smoothstep(-delta, delta, dist - limit);
    vec4 fill = vec4(uColor, alpha);

    alpha = border.a + fill.a * (1. - border.a);

    gl_FragColor = vec4((border.rgb * border.a + fill.rgb * fill.a * (1. - border.a)) / alpha, uAlpha * alpha);
}{@}UI3DPromptButtonShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec2 uSize;
uniform vec3 uColor;
uniform vec3 uBorderColor;
uniform float uHover;
uniform float uTransparent;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
float roundedBorder(float thickness, float radius, vec2 uv, vec2 resolution, out float inside) {
    // Get square-pixel coordinates in range -1.0 .. 1.0 on the y axis
    float aspect = resolution.x / resolution.y;
    vec2 ratio = vec2(aspect, 1.0);
    vec2 squareUv = (2.0 * uv - 1.0) * ratio; // -1.0 .. 1.0

    float squareThickness = (thickness / resolution.y);
    float squareRadius = 2.0 * (radius / resolution.y);
    vec2 size = ratio - vec2(squareRadius + squareThickness);

    float d = length(max(abs(squareUv),size) - size) - squareRadius;
    float dist = abs(d);
    float delta = fwidth(dist);
    float border = 1.0 - smoothstep(-delta, delta, dist - squareThickness);

    delta = fwidth(d);
    float limit = squareThickness * 0.5;
    inside = 1.0 - smoothstep(-delta, delta, d - limit);

    return border;
}


float roundedRectangle(float radius, vec2 uv, vec2 resolution) {
    // Get square-pixel coordinates in range -1.0 .. 1.0 on the y axis
    float aspect = resolution.x / resolution.y;
    vec2 ratio = vec2(aspect, 1.0);
    vec2 squareUv = (2.0 * uv - 1.0) * ratio; // -1.0 .. 1.0

    float squareThickness = 2.0 / resolution.y;
    float squareRadius = 2.0 * (radius / resolution.y);
    vec2 size = ratio - vec2(squareRadius + squareThickness);

    float dist = length(max(abs(squareUv),size) - size) - squareRadius;
    float delta = fwidth(dist);
    float limit = squareThickness * 0.5;
    return  1.0 - smoothstep(-delta, delta, dist - limit);
}

void main() {
    float inside;
    vec4 borderColor = vec4(uBorderColor, roundedBorder(4., 4., vUv, uSize, inside));
    vec4 color = vec4(uColor, uHover * roundedRectangle(4., vUv, uSize));
    color = mix(borderColor, color, color.a);
    color.a *= uAlpha;

    if(uTransparent > .01 && color.a < .01) {
        discard;
    }

    gl_FragColor = color;
}{@}AntimatterSpawn.fs{@}uniform float uMaxCount;
uniform float uSetup;
uniform float decay;
uniform vec2 decayRandom;
uniform sampler2D tLife;
uniform sampler2D tAttribs;
uniform float HZ;

#require(range.glsl)

void main() {
    vec2 uv = vUv;
    #test !window.Metal
    uv = gl_FragCoord.xy / fSize;
    #endtest

    vec4 data = texture2D(tInput, uv);

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    vec4 life = texture2D(tLife, uv);
    vec4 random = texture2D(tAttribs, uv);
    if (life.x > 0.5) {
        data.xyz = life.yzw;
        data.x -= 999.0;
    } else {
        if (data.x < -500.0) {
            data.x = 1.0;
        } else {
            data.x -= 0.005 * decay * crange(random.w, 0.0, 1.0, decayRandom.x, decayRandom.y) * HZ;
        }
    }

    if (uSetup > 0.5) {
        data = vec4(0.0);
    }

    gl_FragColor = data;
}{@}curve3d.vs{@}uniform sampler2D tCurve;
uniform float uCurveSize;

vec2 getCurveUVFromIndex(float index) {
    float size = uCurveSize;
    vec2 ruv = vec2(0.0);
    float p0 = index / size;
    float y = floor(p0);
    float x = p0 - y;
    ruv.x = x;
    ruv.y = y / size;
    return ruv;
}

vec3 transformAlongCurve(vec3 pos, float idx) {
    vec3 offset = texture2D(tCurve, getCurveUVFromIndex(idx * (uCurveSize * uCurveSize))).xyz;
    vec3 p = pos;
    p.xz += offset.xz;
    return p;
}
{@}DesktopStreamShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
}{@}fbr.fs{@}uniform sampler2D tMRO;
uniform sampler2D tMatcap;
uniform sampler2D tNormal;
uniform vec4 uLight;
uniform vec3 uColor;
uniform float uNormalStrength;

varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vEyePos;
varying vec2 vUv;
varying vec3 vMPos;

const float PI = 3.14159265359;
const float PI2 = 6.28318530718;
const float RECIPROCAL_PI = 0.31830988618;
const float RECIPROCAL_PI2 = 0.15915494;
const float LOG2 = 1.442695;
const float EPSILON = 1e-6;
const float LN2 = 0.6931472;

vec2 reflectMatcapFBR(vec3 position, mat4 modelViewMatrix, vec3 normal) {
    vec4 p = vec4(position, 1.0);

    vec3 e = normalize(vec3(modelViewMatrix * p));
    vec3 n = normalize(normal);
    vec3 r = reflect(e, n);
    float m = 2.0 * sqrt(
    pow(r.x, 2.0) +
    pow(r.y, 2.0) +
    pow(r.z + 1.0, 2.0)
    );

    vec2 uv = r.xy / m + .5;

    return uv;
}

float prange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    float oldRange = oldMax - oldMin;
    float newRange = newMax - newMin;
    return (((oldValue - oldMin) * newRange) / oldRange) + newMin;
}

float pcrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(prange(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));
}

vec3 unpackNormalFBR( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
    surf_norm = normalize(surf_norm);

    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );

    vec3 S = normalize( q0 * st1.t - q1 * st0.t );
    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );
    vec3 N = normalize( surf_norm );

    vec3 mapN = texture2D( normal_map, uv * scale ).xyz * 2.0 - 1.0;
    mapN.xy *= intensity;
    mat3 tsn = mat3( S, T, N );
    return normalize( tsn * mapN );
}

float geometricOcclusion(float NdL, float NdV, float roughness) {
    float r = roughness;
    float attenuationL = 2.0 * NdL / (NdL + sqrt(r * r + (1.0 - r * r) * (NdL * NdL)));
    float attenuationV = 2.0 * NdV / (NdV + sqrt(r * r + (1.0 - r * r) * (NdV * NdV)));
    return attenuationL * attenuationV;
}

float microfacetDistribution(float roughness, float NdH) {
    float roughnessSq = roughness * roughness;
    float f = (NdH * roughnessSq - NdH) * NdH + 1.0;
    return roughnessSq / (PI * f * f);
}

vec3 getFBR(vec3 baseColor, vec2 uv, vec2 normalUV) {
    vec3 mro = texture2D(tMRO, uv).rgb;
    float roughness = mro.g;

    vec3 normal = unpackNormalFBR(vEyePos, vNormal, tNormal, uNormalStrength, 1.0, normalUV);
    vec2 aUV = reflectMatcapFBR(vPos, projectionMatrix, normal);
    vec2 bUV = reflectMatcapFBR(vPos, modelMatrix, normal);
    vec2 mUV = mix(aUV, bUV, roughness);

    vec3 V = normalize(cameraPosition - vMPos);
    vec3 L = normalize(uLight.xyz);
    vec3 H = normalize(L + V);
    vec3 reflection = -normalize(reflect(V, normal));

    float NdL = pcrange(clamp(dot(normal, L), 0.001, 1.0), 0.0, 1.0, 0.4, 1.0);
    float NdV = pcrange(clamp(abs(dot(normal, V)), 0.001, 1.0), 0.0, 1.0, 0.4, 1.0);
    float NdH = clamp(dot(normal, H), 0.0, 1.0);
    float VdH = clamp(dot(V, H), 0.0, 1.0);

    float G = geometricOcclusion(NdL, NdV, roughness);
    float D = microfacetDistribution(roughness, NdH);

    vec3 specContrib = G * D / (4.0 * NdL * NdV) * uColor;
    vec3 color = NdL * specContrib * uLight.w;

    return ((baseColor * texture2D(tMatcap, mUV).rgb) + color) * mro.b;
}

vec3 getFBR(vec3 baseColor, vec2 uv) {
    return getFBR(baseColor, uv, uv);
}

vec3 getFBR(vec3 baseColor) {
    return getFBR(baseColor, vUv, vUv);
}

vec3 getFBR() {
    float roughness = texture2D(tMRO, vUv).g;

    vec3 normal = unpackNormalFBR(vEyePos, vNormal, tNormal, 1.0, 1.0, vUv);
    vec2 aUV = reflectMatcapFBR(vPos, projectionMatrix, normal);
    vec2 bUV = reflectMatcapFBR(vPos, modelMatrix, normal);
    vec2 mUV = mix(aUV, bUV, roughness);

    return texture2D(tMatcap, mUV).rgb;
}

vec3 getFBRSimplified() {
    vec2 mUV = reflectMatcapFBR(vPos, modelViewMatrix, vNormal);
    return texture2D(tMatcap, mUV).rgb;
}
{@}fbr.vs{@}varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vEyePos;
varying vec2 vUv;
varying vec3 vMPos;

void setupFBR(vec3 p0) { //inlinemain
    vNormal = normalMatrix * normal;
    vUv = uv;
    vPos = p0;
    vec4 mPos = modelMatrix * vec4(p0, 1.0);
    vMPos = mPos.xyz / mPos.w;
    vEyePos = vec3(modelViewMatrix * vec4(p0, 1.0));
}{@}AreaLights.glsl{@}mat3 transposeMat3(  mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/
vec2 LTC_Uv(  vec3 N,  vec3 V,  float roughness ) {
	float LUT_SIZE  = 64.0;
	float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = clamp( dot( N, V ), 0.0, 1.0 );
	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}

float LTC_ClippedSphereFormFactor(  vec3 f ) {
	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}

vec3 LTC_EdgeVectorFormFactor(  vec3 v1,  vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}

vec3 LTC_Evaluate(  vec3 N,  vec3 V,  vec3 P,  mat3 mInv,  vec3 rectCoords[ 4 ] ) {
	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system
	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

	return vec3( result );
}{@}Lighting.glsl{@}#!ATTRIBUTES

#!UNIFORMS
struct LightConfig {
    vec3 normal;
    bool phong;
    bool areaToPoint;
    float phongAttenuation;
    float phongShininess;
    vec3 phongColor;
    vec3 lightColor;
    bool overrideColor;
};

uniform sampler2D tLTC1;
uniform sampler2D tLTC2;

#!VARYINGS
varying vec3 vPos;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vViewDir;

#!SHADER: lighting.vs

void setupLight(vec3 p0, vec3 p1) { //inlinemain
    vPos = p0;
    vNormal = normalize(normalMatrix * p1);
    vWorldPos = vec3(modelMatrix * vec4(p0, 1.0));
    vViewDir = -vec3(modelViewMatrix * vec4(p0, 1.0));
}

#test !window.Metal
void setupLight(vec3 p0) {
    setupLight(p0, normal);
}
#endtest

#!SHADER: lighting.fs

#require(LightingCommon.glsl)

void setupLight() {

}
vec3 getCombinedColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w < 1.0) continue;

        if (lProps.w < 1.1) {
            color += lightDirectional(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        } else if (lProps.w < 2.1) {
            color += lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        } else if (lProps.w < 3.1) {
            color += lightCone(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        } else if (lProps.w < 4.1) {
            color += lightArea(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
        }
    }

    return lclamp(color);
}

vec3 getCombinedColor(LightConfig config) {
    #test !window.Metal
    return getCombinedColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
    #endtest
    return vec3(0.0);
}

vec3 getCombinedColor() {
    LightConfig config;
    config.normal = vNormal;
    return getCombinedColor(config);
}

vec3 getCombinedColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getCombinedColor(config);
}

vec3 getCombinedColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    LightConfig config;
    config.normal = normal;
    return getCombinedColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
}

vec3 getPointLightColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w > 1.9 && lProps.w < 2.1) {
            color += lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        }
    }

    return lclamp(color);
}

vec3 getPointLightColor(LightConfig config) {
    #test !window.Metal
    return getPointLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
    #endtest
    return vec3(0.0);
}

vec3 getPointLightColor() {
    LightConfig config;
    config.normal = vNormal;
    return getPointLightColor(config);
}

vec3 getPointLightColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getPointLightColor(config);
}

vec3 getPointLightColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    LightConfig config;
    config.normal = normal;
    return getPointLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
}

vec3 getAreaLightColor(float roughness, LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    vec3 color = vec3(0.0);

    #test Lighting.fallbackAreaToPointTest()
    config.areaToPoint = true;
    #endtest

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        lData.w *= roughness;

        if (lProps.w > 3.9 && lProps.w < 4.1) {
            if (config.areaToPoint) {
                color += lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
            } else {
                color += lightArea(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
            }
        }
    }

    return lclamp(color);
}

vec3 getAreaLightColor(float roughness, LightConfig config) {
    #test !window.Metal
    return getAreaLightColor(roughness, config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
    #endtest
    return vec3(0.0);
}


vec3 getAreaLightColor(float roughness) {
    LightConfig config;
    config.normal = vNormal;
    return getAreaLightColor(roughness, config);
}

vec3 getAreaLightColor() {
    LightConfig config;
    config.normal = vNormal;
    return getAreaLightColor(1.0, config);
}

vec3 getAreaLightColor(LightConfig config) {
    return getAreaLightColor(1.0, config);
}

vec3 getAreaLightColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getAreaLightColor(1.0, config);
}

vec3 getAreaLightColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    LightConfig config;
    config.normal = normal;
    return getAreaLightColor(1.0, config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix, tLTC1, tLTC2);
}


vec3 getSpotLightColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w > 2.9 && lProps.w < 3.1) {
            color += lightCone(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        }
    }

    return lclamp(color);
}

vec3 getSpotLightColor(LightConfig config) {
    #test !window.Metal
    return getSpotLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
    #endtest
    return vec3(0.0);
}

vec3 getSpotLightColor() {
    LightConfig config;
    config.normal = vNormal;
    return getSpotLightColor(config);
}

vec3 getSpotLightColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getSpotLightColor(config);
}

vec3 getSpotLightColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    LightConfig config;
    config.normal = normal;
    return getSpotLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
}


vec3 getDirectionalLightColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w > 0.9 && lProps.w < 1.1) {
            color += lightDirectional(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        }
    }

    return lclamp(color);
}

vec3 getDirectionalLightColor(LightConfig config) {
    #test !window.Metal
    return getDirectionalLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
    #endtest
    return vec3(0.0);
}

vec3 getDirectionalLightColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getDirectionalLightColor(config);
}

vec3 getDirectionalLightColor() {
    LightConfig config;
    config.normal = vNormal;
    return getDirectionalLightColor(config);
}

vec3 getDirectionalLightColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    LightConfig config;
    config.normal = vNormal;
    return getDirectionalLightColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
}

vec3 getStandardColor(LightConfig config, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 color = vec3(0.0);

    #pragma unroll_loop
    for (int i = 0; i < NUM_LIGHTS; i++) {
        vec3 lColor = config.overrideColor ? config.lightColor : lightColor[i].rgb;
        vec3 lPos = lightPos[i].rgb;
        vec4 lData = lightData[i];
        vec4 lData2 = lightData2[i];
        vec4 lData3 = lightData3[i];
        vec4 lProps = lightProperties[i];

        if (lProps.w < 1.0) continue;

        if (lProps.w < 1.1) {
            color += lightDirectional(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        } else if (lProps.w < 2.1) {
            color += lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
        }
    }

    return lclamp(color);
}

vec3 getStandardColor(LightConfig config) {
    #test !window.Metal
    return getStandardColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
    #endtest
    return vec3(0.0);
}

vec3 getStandardColor() {
    LightConfig config;
    config.normal = vNormal;
    return getStandardColor(config);
}

vec3 getStandardColor(vec3 normal) {
    LightConfig config;
    config.normal = normal;
    return getStandardColor(config);
}

vec3 getStandardColor(vec3 normal, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    LightConfig config;
    config.normal = normal;
    return getStandardColor(config, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);
}{@}LightingCommon.glsl{@}#require(AreaLights.glsl)

vec3 lworldLight(vec3 lightPos, vec3 localPos, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec4 mvPos = modelViewMatrix * vec4(localPos, 1.0);
    vec4 worldPosition = viewMatrix * vec4(lightPos, 1.0);
    return worldPosition.xyz - mvPos.xyz;
}

float lrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    vec3 sub = vec3(oldValue, newMax, oldMax) - vec3(oldMin, newMin, oldMin);
    return sub.x * sub.y / sub.z + newMin;
}

vec3 lclamp(vec3 v) {
    return clamp(v, vec3(0.0), vec3(1.0));
}

float lcrange(float oldValue, float oldMin, float oldMax, float newMin, float newMax) {
    return clamp(lrange(oldValue, oldMin, oldMax, newMin, newMax), min(newMax, newMin), max(newMin, newMax));
}

#require(Phong.glsl)

vec3 lightDirectional(LightConfig config, vec3 lColor, vec3 lPos, vec4 lData, vec4 lData2, vec4 lData3, vec4 lProps, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    vec3 lDir = lworldLight(lPos, vPos, modelViewMatrix, viewMatrix);
    float volume = dot(normalize(lDir), config.normal);

    return lColor * lcrange(volume, 0.0, 1.0, lProps.z, 1.0);
}

vec3 lightPoint(LightConfig config, vec3 lColor, vec3 lPos, vec4 lData, vec4 lData2, vec4 lData3, vec4 lProps, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    float dist = length(vWorldPos - lPos);
    if (dist > lProps.y) return vec3(0.0);

    vec3 color = vec3(0.0);

    vec3 lDir = lworldLight(lPos, vPos, modelViewMatrix, viewMatrix);
    float falloff = pow(lcrange(dist, 0.0, lProps.y, 1.0, 0.0), 2.0);

    if (config.phong) {
        color += falloff * phong(lProps.x, lColor, config.phongColor, config.phongShininess, config.phongAttenuation, config.normal, normalize(lDir), vViewDir, lProps.z);
    } else {
        float volume = dot(normalize(lDir), config.normal);
        volume = lcrange(volume, 0.0, 1.0, lProps.z, 1.0);
        color += lColor * volume * lProps.x * falloff;
    }

    return color;
}

vec3 lightCone(LightConfig config, vec3 lColor, vec3 lPos, vec4 lData, vec4 lData2, vec4 lData3, vec4 lProps, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix) {
    float dist = length(vWorldPos - lPos);
    if (dist > lProps.y) return vec3(0.0);

    vec3 lDir = lworldLight(lPos, vPos, modelViewMatrix, viewMatrix);
    vec3 sDir = degrees(-lData.xyz);
    float radius = lData.w;
    vec3 surfacePos = vWorldPos;
    vec3 surfaceToLight = normalize(lPos - surfacePos);
    float lightToSurfaceAngle = degrees(acos(dot(-surfaceToLight, normalize(sDir))));
    float attenuation = 1.0;

    vec3 nColor = lightPoint(config, lColor, lPos, lData, lData2, lData3, lProps, vPos, vWorldPos, vViewDir, modelViewMatrix, viewMatrix);

    float featherMin = 1.0 - lData2.x*0.1;
    float featherMax = 1.0 + lData2.x*0.1;

    attenuation *= smoothstep(lightToSurfaceAngle*featherMin, lightToSurfaceAngle*featherMax, radius);

    nColor *= attenuation;
    return nColor;
}

vec3 lightArea(LightConfig config, vec3 lColor, vec3 lPos, vec4 lData, vec4 lData2, vec4 lData3, vec4 lProps, vec3 vPos, vec3 vWorldPos, vec3 vViewDir, mat4 modelViewMatrix, mat4 viewMatrix, sampler2D tLTC1, sampler2D tLTC2) {
    float dist = length(vWorldPos - lPos);
    if (dist > lProps.y) return vec3(0.0);

    vec3 color = vec3(0.0);

    vec3 normal = config.normal;
    vec3 viewDir = normalize(vViewDir);
    vec3 position = -vViewDir;
    float roughness = lData.w;
    vec3 mPos = lData.xyz;
    vec3 halfWidth = lData2.xyz;
    vec3 halfHeight = lData3.xyz;

    float falloff = pow(lcrange(dist, 0.0, lProps.y, 1.0, 0.0), 2.0);

    vec3 rectCoords[ 4 ];
    rectCoords[ 0 ] = mPos + halfWidth - halfHeight;
    rectCoords[ 1 ] = mPos - halfWidth - halfHeight;
    rectCoords[ 2 ] = mPos - halfWidth + halfHeight;
    rectCoords[ 3 ] = mPos + halfWidth + halfHeight;

    vec2 uv = LTC_Uv( normal, viewDir, roughness );

    #test !!window.Metal
    uv.y = 1.0 - uv.y;
    #endtest

    vec4 t1 = texture2D(tLTC1, uv);
    vec4 t2 = texture2D(tLTC2, uv);

    mat3 mInv = mat3(
    vec3( t1.x, 0, t1.y ),
    vec3(    0, 1,    0 ),
    vec3( t1.z, 0, t1.w )
    );

    vec3 fresnel = ( lColor * t2.x + ( vec3( 1.0 ) - lColor ) * t2.y );
    color += lColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords ) * falloff * lProps.x;
    color += lColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords ) * falloff * lProps.x;

    return color;
}{@}LitMaterial.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

#require(lighting.vs)

void main() {
    vUv = uv;
    vPos = position;
    setupLight(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(lighting.fs)
#require(shadows.fs)

void main() {
    setupLight();

    vec3 color = texture2D(tMap, vUv).rgb;
    color *= getShadow(vPos);

    color += getCombinedColor();

    gl_FragColor = vec4(color, 1.0);
}{@}Phong.glsl{@}float pclamp(float v) {
    return clamp(v, 0.0, 1.0);
}

float dPhong(float shininess, float dotNH) {
    return (shininess * 0.5 + 1.0) * pow(dotNH, shininess);
}

vec3 schlick(vec3 specularColor, float dotLH) {
    float fresnel = exp2((-5.55437 * dotLH - 6.98316) * dotLH);
    return (1.0 - specularColor) * fresnel + specularColor;
}

vec3 calcBlinnPhong(vec3 specularColor, float shininess, vec3 normal, vec3 lightDir, vec3 viewDir) {
    vec3 halfDir = normalize(lightDir + viewDir);
    
    float dotNH = pclamp(dot(normal, halfDir));
    float dotLH = pclamp(dot(lightDir, halfDir));

    vec3 F = schlick(specularColor, dotLH);
    float G = 0.85;
    float D = dPhong(shininess, dotNH);
    
    return F * G * D;
}

vec3 calcBlinnPhong(vec3 specularColor, float shininess, vec3 normal, vec3 lightDir, vec3 viewDir, float minTreshold) {
    vec3 halfDir = normalize(lightDir + viewDir);

    float dotNH = pclamp(dot(normal, halfDir));
    float dotLH = pclamp(dot(lightDir, halfDir));

    dotNH = lrange(dotNH, 0.0, 1.0, minTreshold, 1.0);
    dotLH = lrange(dotLH, 0.0, 1.0, minTreshold, 1.0);

    vec3 F = schlick(specularColor, dotLH);
    float G = 0.85;
    float D = dPhong(shininess, dotNH);

    return F * G * D;
}

vec3 phong(float amount, vec3 diffuse, vec3 specular, float shininess, float attenuation, vec3 normal, vec3 lightDir, vec3 viewDir, float minThreshold) {
    float cosineTerm = pclamp(lrange(dot(normal, lightDir), 0.0, 1.0, minThreshold, 1.0));
    vec3 brdf = calcBlinnPhong(specular, shininess, normal, lightDir, viewDir, minThreshold);
    return brdf * amount * diffuse * attenuation * cosineTerm;
}{@}Line.glsl{@}#!ATTRIBUTES
attribute vec3 previous;
attribute vec3 next;
attribute float side;
attribute float width;
attribute float lineIndex;
attribute vec2 uv2;

#!UNIFORMS
uniform float uLineWidth;
uniform float uBaseWidth;
uniform float uOpacity;
uniform vec3 uColor;

#!VARYINGS
varying float vLineIndex;
varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vColor;
varying float vOpacity;
varying float vWidth;
varying float vDist;
varying float vFeather;


#!SHADER: Vertex

#require(conditionals.glsl)

//params

vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
}

void main() {
    float aspect = resolution.x / resolution.y;

    vUv = uv;
    vUv2 = uv2;
    vLineIndex = lineIndex;
    vColor = uColor;
    vOpacity = uOpacity;
    vFeather = 0.1;

    vec3 pos = position;
    vec3 prevPos = previous;
    vec3 nextPos = next;
    float lineWidth = 1.0;
    //main

    //startMatrix
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(pos, 1.0);
    vec4 pPos = m * vec4(prevPos, 1.0);
    vec4 nPos = m * vec4(nextPos, 1.0);
    //endMatrix

    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(pPos, aspect);
    vec2 nextP = fix(nPos, aspect);

    float w = uBaseWidth * uLineWidth * width * lineWidth;
    vWidth = w;

    vec2 dirNC = normalize(currentP - prevP);
    vec2 dirPC = normalize(nextP - currentP);

    vec2 dir1 = normalize(currentP - prevP);
    vec2 dir2 = normalize(nextP - currentP);
    vec2 dirF = normalize(dir1 + dir2);

    vec2 dirM = mix(dirPC, dirNC, when_eq(nextP, currentP));
    vec2 dir = mix(dirF, dirM, clamp(when_eq(nextP, currentP) + when_eq(prevP, currentP), 0.0, 1.0));

    //direction
    vec2 normal = vec2(-dir.y, dir.x);
    normal.x /= aspect;
    normal *= 0.5 * w;

    vDist = finalPosition.z / 10.0;

    finalPosition.xy += normal * side;
    gl_Position = finalPosition;
}

#!SHADER: Fragment

//fsparams

void main() {
    float d = (1.0 / (5.0 * vWidth + 1.0)) * vFeather * (vDist * 5.0 + 0.5);
    vec2 uvButt = vec2(0.0, vUv.y);
    float buttLength = 0.5 * vWidth;
    uvButt.x = min(0.5, vUv2.x / buttLength) + (0.5 - min(0.5, (vUv2.y - vUv2.x) / buttLength));
    float round = length(uvButt - 0.5);
    float alpha = smoothstep(0.5, 0.5 - d, round);

    vec3 color = vColor;

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
    gl_FragColor.a *= vOpacity;

    //fsmain

    if (gl_FragColor.a < 0.01) discard;
}
{@}ProtonAntimatter.fs{@}uniform sampler2D tOrigin;
uniform sampler2D tAttribs;
uniform float uMaxCount;
//uniforms

#require(range.glsl)
//requires

void main() {
    vec2 uv = vUv;
    #test !window.Metal
    uv = gl_FragCoord.xy / fSize;
    #endtest

    vec3 origin = texture2D(tOrigin, uv).xyz;
    vec4 inputData = texture2D(tInput, uv);
    vec3 pos = inputData.xyz;
    vec4 random = texture2D(tAttribs, uv);
    float data = inputData.w;

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    //code

    gl_FragColor = vec4(pos, data);
}{@}ProtonAntimatterLifecycle.fs{@}uniform sampler2D tOrigin;
uniform sampler2D tAttribs;
uniform sampler2D tSpawn;
uniform float uMaxCount;
//uniforms

#require(range.glsl)
//requires

void main() {
    vec3 origin = texture2D(tOrigin, vUv).rgb;
    vec4 inputData = texture2D(tInput, vUv);
    vec3 pos = inputData.xyz;
    vec4 random = texture2D(tAttribs, vUv);
    float data = inputData.w;

    if (vUv.x + vUv.y * fSize > uMaxCount) {
        gl_FragColor = vec4(9999.0);
        return;
    }

    vec4 spawn = texture2D(tSpawn, vUv);
    float life = spawn.x;

    if (spawn.x < -500.0) {
        pos = spawn.xyz;
        pos.x += 999.0;
        spawn.x = 1.0;
        gl_FragColor = vec4(pos, data);
        return;
    }

    //abovespawn
    if (spawn.x <= 0.0) {
        pos.x = 9999.0;
        gl_FragColor = vec4(pos, data);
        return;
    }

    //abovecode
    //code

    gl_FragColor = vec4(pos, data);
}{@}ProtonNeutrino.fs{@}//uniforms

#require(range.glsl)
//requires

void main() {
    //code
}{@}SceneLayout.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.a *= uAlpha;
    gl_FragColor.rgb /= gl_FragColor.a;
}{@}GLUIShape.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(uColor, uAlpha);
}{@}GLUIShapeBitmap.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tMask;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv) * texture2D(tMask, vUv).a;
    gl_FragColor.a *= uAlpha;
}{@}ARCameraQuad.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    #test !!window.Metal
    vUv.y = 1.0 - vUv.y;
    #endtest

    gl_FragColor = texture2D(tMap, vUv);
}{@}VRHand.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uStatic;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;

#!SHADER: Vertex

#require(skinning.glsl)

void main() {
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    vViewDir = -vec3(modelViewMatrix * vec4(position, 1.0));
    vec3 pos = position;

    if (uStatic < 0.5) {
        applySkin(pos, vNormal);
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(fresnel.glsl)

void main() {
    gl_FragColor = vec4(uColor * (1.0 - getFresnel(vNormal, vViewDir, 5.0)), 1.0);
}{@}avatargrid.glsl{@}vec2 getAvatarUV(float index, float rows) {
    vec2 st = uv / rows;
    st.x += mod(index, rows) / rows;
    st.y += 1. - floor(index / rows) / rows - 1. / rows;
    return st;
}

vec2 getAvatarUV(float index, vec2 uv, float rows) {
    return getAvatarUV(index, rows);
}{@}ControllerShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform vec2 uGradient;
uniform float uAlphaCutoff;

#!VARYINGS
varying vec2 vUv;
varying float vFade;

#!SHADER: Vertex

void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

    #!SHADER: Fragment
    #require(range.glsl)

void main() {
    vec3 color = uColor;
    float gradient = vUv.y;

    float alpha = crange(gradient, 0.0, 1.0, uGradient.x, uGradient.y);

    if (alpha < uAlphaCutoff) discard;

    gl_FragColor = vec4(color, alpha);
}{@}FXAAMaskShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS

#!VARYINGS

#!SHADER: Vertex
void main() {
    vec3 pos = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(1.0);
}
{@}DefaultCrowdAvatar.glsl{@}#!ATTRIBUTES
attribute vec3 color0;
attribute vec3 color1;
attribute vec3 color2;

#!UNIFORMS
uniform sampler2D tPos;

#!VARYINGS
varying vec3 vColor;

#!SHADER: Vertex

#require(crowdavatar.vs)

void main() {
    setupAvatar();

    if (isMesh(b0)) {
        vColor = color0;
    }

    if (isMesh(b1)) {
        vColor = color1;
    }

    if (isMesh(b2)) {
        vColor = color2;
    }

    vec3 pos = getPos();
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(crowdavatar.fs)

void main() {
    if (invisible()) discard;
    gl_FragColor = vec4(vColor, 1.0);
}{@}crowdavatar.fs{@}varying float vIndex;
varying vec3 vOffset;
varying float vMask;
uniform float uMaskDebug;

bool isMesh(float id) {
    return abs(vIndex - id) < 0.01;
}

bool invisible() {
    return vOffset.y < -0.4 || (vMask < 0.1 && uMaskDebug < 0.5);
}{@}crowdavatar.vs{@}attribute vec3 lookup;
attribute float geomIndex;
attribute vec4 random;

varying float vIndex;
varying float vMask;
varying vec3 vOffset;

uniform sampler2D tMask;
uniform vec2 uMaskMin;
uniform vec2 uMaskMax;
uniform float uMaskDebug;
uniform float uRotation;

#require(range.glsl)
#require(instance.vs)

bool isMesh(float id) {
    return abs(geomIndex - id) < 0.01;
}

mat4 crotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
    0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotateNormal(vec3 normal) {
    vec3 newNormal = vec3(crotationMatrix(vec3(0.0, 1.0, 0.0), random.x * degrees(uRotation)) * vec4(normal, 1.0));
    return newNormal;
}

vec3 getPos() {
    vec3 offset = texture2D(tPos, lookup.xy).xyz;
    vOffset = offset;

    vec3 pos = vec3(crotationMatrix(vec3(0.0, 1.0, 0.0), random.x * degrees(uRotation)) * vec4(position, 1.0));

    if (uMaskMax.x - uMaskMin.x > 0.01) {
        vec2 uv;
        vec2 min = uMaskMin;
        vec2 max = uMaskMax;
        uv.x = range(offset.x, min.x, max.x, 0.0, 1.0);
        uv.y = range(offset.z, min.y, max.y, 0.0, 1.0);

        float mask = texture2D(tMask, uv).r;
        if (mask < 0.1 && uMaskDebug < 0.5) {
            offset += 99999.0;
        }

        vMask = mask;
    }

    return transformPosition(pos, offset);
}

void setupAvatar() {
    vIndex = geomIndex;
}{@}AvatarNameLabels.glsl{@}#!ATTRIBUTES
attribute float tIndex;

#!UNIFORMS
uniform float uSize;
uniform sampler2D tData;
uniform vec4 uQuaternion;
uniform vec3 uColor;
uniform float uAlpha;
uniform sampler2D tMap;
uniform vec2 uDistanceFade;

#!VARYINGS
varying vec2 vUv;
varying float vAlpha;

#!SHADER: Vertex

#require(instance.vs)
#require(range.glsl)

vec2 getPackedUV(float index) {
    float pixel = index;

    float size = uSize;
    float p0 = pixel / size;
    float y = floor(p0);
    float x = p0 - y;

    vec2 uv = vec2(0.0);
    uv.x = x;
    uv.y = y / size;
    return uv;
}

vec4 getPackedData(float offset) {
    return texture2D(tData, getPackedUV(offset));
}

vec4 extractXAxis(vec4 quat) {
    float angle = atan(quat.y, quat.w) + 3.14159265359;
    return vec4(0., sin(angle), 0., cos(angle));
}

void main() {
    vUv = uv;
    vec3 offset = getPackedData(tIndex).xyz;
    vec4 quat = uQuaternion;

    #test Platform.usingVR()
    quat = extractXAxis(quat);
    #endtest

    vec3 pos = transformPosition(position, offset, vec3(1.0), quat);
    vAlpha = uAlpha * crange(length(cameraPosition - offset), uDistanceFade.x, uDistanceFade.y, 1.0, 0.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(msdf.glsl)

void main() {
    float alpha = msdf(tMap, vUv);
    gl_FragColor = vec4(uColor, vAlpha * alpha);
}{@}DefaultOptimizedAvatar.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;

#!VARYINGS
varying float vVisibility;

#!SHADER: Vertex

#require(optimizedavatar.vs)

void main() {
    setupAvatar();

    vVisibility = visibility();
    if (vVisibility < 0.5) {
        gl_Position = vec4(0.0);
        return;
    }

    vec3 pos = position;
    pos *= vVisibility;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(optimizedavatar.fs)

void main() {
    if (vVisibility < 0.5) discard;
    gl_FragColor = vec4(uColor, 1.0);
}{@}optimizedavatar.fs{@}varying float vId;
varying float vGroupId;

bool isMesh(float id) {
    return abs(vId - id) < 0.01;
}

bool isGroup(float id) {
    return abs(vGroupId - id) < 0.01;
}

bool equals(float a, float b) {
    return abs(a - b) < 0.01;
}{@}optimizedavatar.vs{@}attribute float geomIndex;
attribute float groupIndex;

uniform vec4 uAVVis;

varying float vId;
varying float vGroupId;

#require(instance.vs)

bool equals(float a, float b) {
    return abs(a - b) < 0.01;
}

float visibility() {
    float vis = 0.0;
    if (geomIndex > 99.0 || equals(geomIndex, uAVVis.x) || equals(geomIndex, uAVVis.y) || equals(geomIndex, uAVVis.z) || equals(geomIndex, uAVVis.w)) vis = 1.0;

    #ifdef INSTANCED
    if (scale.x < 0.001) vis = 0.0;
    #endif

    return vis;
}

void setupAvatar() {
    vId = geomIndex;
    vGroupId = groupIndex;
}

bool isMesh(float id) {
    return abs(geomIndex - id) < 0.01;
}

bool isGroup(float id) {
    return abs(groupIndex - id) < 0.01;
}{@}avatarVRTracking.vs{@}uniform float uNeckHeight;
uniform vec3 uRightShoulder;
uniform vec3 uRightElbow;
uniform vec3 uRightHand;
uniform vec3 uLeftShoulder;
uniform vec3 uLeftElbow;
uniform vec3 uLeftHand;

vec3 originShoulder = vec3(0.);
vec3 shoulder = vec3(0.);
vec3 elbow = vec3(0.);
vec3 hand = vec3(0.);

float totalDistance = 0.;
float armLength = 0.;
float forearmLength = 0.;

#define threshold 0.001

vec3 orientateHead( vec4 quat, vec3 vec) {
    return  vec + 2.0 * cross( cross( vec, quat.xyz ) + quat.w * vec, quat.xyz );
}

vec3 orientateOnYAxis(vec3 vec, vec4 quat) {
    float angle = atan(quat.y, quat.w) + 3.14159265359;
    vec4 yQuat = vec4(0., sin(angle), 0., cos(angle));
    return vec + 2.0 * cross( cross( vec, yQuat.xyz ) + yQuat.w * vec, yQuat.xyz );
}

vec3 orientateOnYAxisInverse(vec3 vec, vec4 quat) {
    float angle = atan(quat.y, quat.w) + 3.14159265359;
    angle *= -1.;
    vec4 yQuat = vec4(0., sin(angle), 0., cos(angle));
    return vec + 2.0 * cross( cross( vec, yQuat.xyz ) + yQuat.w * vec, yQuat.xyz );
}


void fabrik(vec3 target) {

    if(length(hand - target) < threshold) return;

    float dist = length(shoulder - target);
    float lambda = 0.;

    if(dist > totalDistance) {
        
        vec3 direction = normalize(target - shoulder);
        elbow = shoulder + direction * armLength;
        hand = shoulder + direction * totalDistance;
    
    } 
    
    else {

        for(float j = 0.; j < 4.; j ++) {

            if(length(hand - target) < threshold) break;

            //FORWARD REACHING
            hand = target;

            dist = length(hand - elbow);
            lambda = forearmLength / dist;
            elbow = (1. - lambda) * hand + lambda * elbow;

            dist = length(elbow - shoulder);
            lambda = armLength / dist;
            shoulder = (1. - lambda) * elbow + lambda * shoulder;

            //BACKWARD REACHING
            shoulder = originShoulder;

            dist = length(elbow - shoulder);
            lambda = armLength / dist;
            elbow = (1. - lambda) * shoulder + lambda * elbow;

            dist = length(hand - elbow);
            lambda = forearmLength / dist;
            hand = (1. - lambda) * elbow + lambda * hand;

        }
    }
}

vec3 interpolator(float t) {

        float t1 = t;
        vec3 outPoint = vec3(0.);

        if(t1 <= 0.5) {
            t1 /= 0.5;
            outPoint =  shoulder * (1. - t1) + elbow * t1;
        } else {
            t1 -= 0.5;
            t1 /= 0.5;
            outPoint =  elbow * (1. - t1) + hand * t1;
        }

        vec3 smoothPoint = (1. - t) * (1. - t) * shoulder + 2. * (1. - t) * t * elbow + t * t * hand;

        float m = 1. - pow(abs(2. * t - 1.), .2);
        return mix(outPoint, smoothPoint, 0.5 + 0.05 * m);
}


vec3 setArmsPosition(vec3 vrController, vec4 orientation, vec3 _shoulder, vec3 _elbow, vec3 _hand) {
    mat3 rr = mat3(-1., 0., 0.,
                   0., 1., 0.,
                   0., 0., -1.);
    vec3 target = orientateOnYAxis(rr * vrController, orientation);
    originShoulder = _shoulder;
    shoulder = _shoulder;
    elbow = _elbow;
    hand = _hand;

    armLength = length(hand - elbow);
    forearmLength = length(elbow - shoulder);
    totalDistance = armLength + forearmLength;

    fabrik(target);

    vec3 pos0 = interpolator(vdata.z);
    vec3 pos1 = interpolator(vdata.z - 0.01);
    vec3 pos2 = interpolator(vdata.z + 0.01);

    vec3 forwardVector0 = normalize(pos0 - pos1);
    vec3 forwardVector1 = normalize(pos2 - pos0);

    float vectorAngle = 1. - dot(forwardVector0, forwardVector1);

    vec3 forwardVector = normalize(forwardVector0 + forwardVector1);

    vec3 upVector = vec3(0., 0., 1.);

    vec3 c1 = normalize(cross(forwardVector, upVector));
    vec3 c2 = normalize(cross(c1, forwardVector));

    float ang = 6.283185307 * vdata.y;
    c2 = c2 * cos(ang) + cross(forwardVector, c2) * sin(ang) + dot(forwardVector, c2) * (1. - cos(ang)) * forwardVector;

    vNormal = c2;
    return pos0 + vNormal * abs(vdata.x);

}

bool setVROrientation(inout vec3 localpos, inout vec3 normal, in vec4 orientation, in vec4 vrControllerLeft, in vec4 vrControllerRight) {
       
        vec3 vrHandLeft =   vrControllerLeft.rgb + vec3(0., vrControllerLeft.a, 0.);
        vec3 vrHandRight =  vrControllerRight.rgb + vec3(0., vrControllerRight.a, 0.);
        
        bool isVR =         length(vrHandLeft) > 0.1 && length(vrHandRight) > 0.1;

        vrHandLeft.y +=     abs(offset.y);
        vrHandRight.y +=    abs(offset.y);

        bool isArms =        !all(equal(vdata.yz, vec2(-1.)));

        if(isVR) {

            if(isArms && length(uRightShoulder) > 0. && length(uLeftShoulder) > 0.) {

                bool isRight = vdata.x < 0.;

                vec3 vrController = isRight ? vrHandRight : vrHandLeft;
                vec3 shoulder = isRight ? uRightShoulder : uLeftShoulder;
                vec3 elbow = isRight ? uRightElbow : uLeftElbow;
                vec3 hand = isRight ? uRightHand : uLeftHand;
                
                localpos = setArmsPosition(vrController, orientation, shoulder, elbow, hand);
            }

            if(vPos.y > uNeckHeight && uNeckHeight > 0.) {

                localpos.y -= uNeckHeight;

                localpos = orientateOnYAxisInverse(localpos, orientation);
                localpos = orientateHead(orientation, localpos);
                localpos = orientateOnYAxis(localpos, orientation);
                
                localpos.y += uNeckHeight;
                normal = orientateHead(orientation, normal);

            } else {

                localpos = orientateOnYAxis(localpos, orientation);
                normal = orientateOnYAxis(normal, orientation);

            }

            mat3 rr = mat3(-1., 0., 0.,
                0., 1., 0.,
                0., 0., -1.);

            localpos = rr * localpos;
            normal = rr * normal; 

            localpos = orientateOnYAxisInverse(localpos, orientation);
            normal = orientateOnYAxisInverse(normal, orientation);

            localpos = orientateOnYAxisInverse(localpos, orientation);
            normal = orientateOnYAxisInverse(normal, orientation);

        } 

        return isVR;
}{@}BaseVideoChatZone.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform float uAlpha;

#!VARYINGS
varying vec2 vUv;
varying vec3 vNormal;

#!SHADER: Vertex
void main() {
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    if (vNormal.y > 0.99) discard;
    if (vNormal.y < -0.99) discard;
    gl_FragColor = vec4(vec3(1.0), 0.2 * (1.0 - vUv.y));
    gl_FragColor.a *= 2.0;
    gl_FragColor.rgb *= uColor;
    gl_FragColor.a *= uAlpha;
}{@}TeleportCylinderShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uMissColor;
uniform float uAlpha;
uniform float uMiss;
uniform float uVis;
uniform float uVis2;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment

#require(eases.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 color = mix(uColor, uMissColor, uMiss);
    float alpha = pow(sineIn(1.0 - vUv.y), 8.0);
    color = rgb2hsv(color);
    color.x += 0.04 * (1.0 - alpha);
    color = hsv2rgb(color);

    gl_FragColor = vec4(color, alpha * uVis * uVis2 * uAlpha);
}{@}TeleportLineShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uLColor;
uniform float uLAlpha;
uniform float uVis;
uniform float uVis2;

#!VARYINGS

#!SHADER: Vertex
void main() {

}

#!SHADER: Fragment

#require(range.glsl)
#require(rgb2hsv.fs)

void main() {
    float blend = crange(vUv.x, 0.1, 0.3, 0.0, 1.0) * crange(vUv.x, 0.5, 0.7, 1.0, 0.0);
    float t = mix(1.0, 0.6, crange(sin((vUv.x*30.0) - time*10.0), -1.0, 1.0, 0.0, 1.0));

    vec3 ocolor = rgb2hsv(uLColor);
    ocolor.x += 0.04 * vUv.x;
    ocolor = hsv2rgb(ocolor);

    gl_FragColor = vec4(ocolor, alpha * uLAlpha * blend * t * uVis * uVis2);
}{@}EmoteParticleShader.glsl{@}#!ATTRIBUTES
attribute vec4 lookup;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tLife;
uniform sampler2D tMap;
uniform sampler2D tPos;
uniform sampler2D tVelocity;
uniform float uIndex;
uniform float uLength;
uniform float uScale;
uniform vec4 uQuaternion;

#!VARYINGS
varying float vIndex;
varying float vLife;
varying vec2 vUv;

#!SHADER: Vertex
#require(instance.vs)
#require(range.glsl)

void main() {
    vUv = uv;

    vIndex = texture2D(tVelocity, lookup.xy).x;
    vLife = texture2D(tLife, lookup.xy).x;
    
    vec3 offset = texture2D(tPos, lookup.xy).xyz;
    vec3 pos = transformPosition(position, offset, uScale * crange(vLife, 1.0, 0.9, 0.0, 1.0), uQuaternion).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(transformUV.glsl)

void main() {
    vec2 uv = translateUV(scaleUV(vUv, vec2(1.0, uLength), vec2(0.0)), vec2(0.0, -(vIndex / uLength)));
    vec4 color = texture2D(tMap, uv);

    gl_FragColor = vec4(color.rgb, color.a * vLife);
}
{@}EnvironmentShadow.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uYPos;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

    #!SHADER: Fragment
void main() {
    float mask = texture2D(tMap, vUv).r;

    gl_FragColor = vec4(mask, uYPos, 0.0, mask);
}{@}environmentshadow.fs{@}uniform sampler2D tShadowMap;
uniform vec4 uBox;

#require(range.glsl)

float getShadow(vec3 vPos, float f) {
    vec2 uv;
    uv.x = crange(vPos.x, uBox.x, uBox.y, 0.0, 1.0);
    uv.y = crange(vPos.z, uBox.z, uBox.w, 1.0, 0.0);

    vec2 shadowMap = texture2D(tShadowMap, uv).xy;
    float shadow = 1.0 - shadowMap.x;

    return crange(shadow, 0.0, 1.0, f, 1.0);
}

float getShadow(vec3 vPos) {
    return getShadow(vPos, 0.0);
}{@}VRCover.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;

#!VARYINGS

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = vec4(vec3(0.0), uAlpha);
}{@}VRCoverSpinner.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform vec3 uColor;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: Fragment
void main() {
    gl_FragColor = texture2D(tMap, vUv);
    gl_FragColor.rgb *= uColor;
    gl_FragColor.a *= pow(uAlpha, 4.0);
}