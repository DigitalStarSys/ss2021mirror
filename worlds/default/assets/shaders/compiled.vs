{@}radialblur.fs{@}vec3 radialBlur( sampler2D map, vec2 uv, float size, vec2 resolution, float quality ) {
    vec3 color = vec3(0.);

    const float pi2 = 3.141596 * 2.0;
    const float direction = 8.0;

    vec2 radius = size / resolution;
    float test = 1.0;

    for ( float d = 0.0; d < pi2 ; d += pi2 / direction ) {
        vec2 t = radius * vec2( cos(d), sin(d));
        for ( float i = 1.0; i <= 100.0; i += 1.0 ) {
            if (i >= quality) break;
            color += texture2D( map, uv + t * i / quality ).rgb ;
        }
    }

    return color / ( quality * direction);
}{@}AntimatterCopy.fs{@}uniform sampler2D tDiffuse;

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

{@}blendmodes.glsl{@}float blendColorDodge(float base, float blend) {
    return (blend == 1.0)?blend:min(base/(1.0-blend), 1.0);
}
vec3 blendColorDodge(vec3 base, vec3 blend) {
    return vec3(blendColorDodge(base.r, blend.r), blendColorDodge(base.g, blend.g), blendColorDodge(base.b, blend.b));
}
vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
    return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}
float blendColorBurn(float base, float blend) {
    return (blend == 0.0)?blend:max((1.0-((1.0-base)/blend)), 0.0);
}
vec3 blendColorBurn(vec3 base, vec3 blend) {
    return vec3(blendColorBurn(base.r, blend.r), blendColorBurn(base.g, blend.g), blendColorBurn(base.b, blend.b));
}
vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
    return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}
float blendVividLight(float base, float blend) {
    return (blend<0.5)?blendColorBurn(base, (2.0*blend)):blendColorDodge(base, (2.0*(blend-0.5)));
}
vec3 blendVividLight(vec3 base, vec3 blend) {
    return vec3(blendVividLight(base.r, blend.r), blendVividLight(base.g, blend.g), blendVividLight(base.b, blend.b));
}
vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
    return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendHardMix(float base, float blend) {
    return (blendVividLight(base, blend)<0.5)?0.0:1.0;
}
vec3 blendHardMix(vec3 base, vec3 blend) {
    return vec3(blendHardMix(base.r, blend.r), blendHardMix(base.g, blend.g), blendHardMix(base.b, blend.b));
}
vec3 blendHardMix(vec3 base, vec3 blend, float opacity) {
    return (blendHardMix(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearDodge(float base, float blend) {
    return min(base+blend, 1.0);
}
vec3 blendLinearDodge(vec3 base, vec3 blend) {
    return min(base+blend, vec3(1.0));
}
vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
    return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearBurn(float base, float blend) {
    return max(base+blend-1.0, 0.0);
}
vec3 blendLinearBurn(vec3 base, vec3 blend) {
    return max(base+blend-vec3(1.0), vec3(0.0));
}
vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
    return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLinearLight(float base, float blend) {
    return blend<0.5?blendLinearBurn(base, (2.0*blend)):blendLinearDodge(base, (2.0*(blend-0.5)));
}
vec3 blendLinearLight(vec3 base, vec3 blend) {
    return vec3(blendLinearLight(base.r, blend.r), blendLinearLight(base.g, blend.g), blendLinearLight(base.b, blend.b));
}
vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
    return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendLighten(float base, float blend) {
    return max(blend, base);
}
vec3 blendLighten(vec3 base, vec3 blend) {
    return vec3(blendLighten(base.r, blend.r), blendLighten(base.g, blend.g), blendLighten(base.b, blend.b));
}
vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
    return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}
float blendDarken(float base, float blend) {
    return min(blend, base);
}
vec3 blendDarken(vec3 base, vec3 blend) {
    return vec3(blendDarken(base.r, blend.r), blendDarken(base.g, blend.g), blendDarken(base.b, blend.b));
}
vec3 blendDarken(vec3 base, vec3 blend, float opacity) {
    return (blendDarken(base, blend) * opacity + base * (1.0 - opacity));
}
float blendPinLight(float base, float blend) {
    return (blend<0.5)?blendDarken(base, (2.0*blend)):blendLighten(base, (2.0*(blend-0.5)));
}
vec3 blendPinLight(vec3 base, vec3 blend) {
    return vec3(blendPinLight(base.r, blend.r), blendPinLight(base.g, blend.g), blendPinLight(base.b, blend.b));
}
vec3 blendPinLight(vec3 base, vec3 blend, float opacity) {
    return (blendPinLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendReflect(float base, float blend) {
    return (blend == 1.0)?blend:min(base*base/(1.0-blend), 1.0);
}
vec3 blendReflect(vec3 base, vec3 blend) {
    return vec3(blendReflect(base.r, blend.r), blendReflect(base.g, blend.g), blendReflect(base.b, blend.b));
}
vec3 blendReflect(vec3 base, vec3 blend, float opacity) {
    return (blendReflect(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendGlow(vec3 base, vec3 blend) {
    return blendReflect(blend, base);
}
vec3 blendGlow(vec3 base, vec3 blend, float opacity) {
    return (blendGlow(base, blend) * opacity + base * (1.0 - opacity));
}
float blendOverlay(float base, float blend) {
    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}
vec3 blendOverlay(vec3 base, vec3 blend) {
    return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));
}
vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
    return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendHardLight(vec3 base, vec3 blend) {
    return blendOverlay(blend, base);
}
vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
    return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendPhoenix(vec3 base, vec3 blend) {
    return min(base, blend)-max(base, blend)+vec3(1.0);
}
vec3 blendPhoenix(vec3 base, vec3 blend, float opacity) {
    return (blendPhoenix(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendNormal(vec3 base, vec3 blend) {
    return blend;
}
vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendNegation(vec3 base, vec3 blend) {
    return vec3(1.0)-abs(vec3(1.0)-base-blend);
}
vec3 blendNegation(vec3 base, vec3 blend, float opacity) {
    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendMultiply(vec3 base, vec3 blend) {
    return base*blend;
}
vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
    return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendAverage(vec3 base, vec3 blend) {
    return (base+blend)/2.0;
}
vec3 blendAverage(vec3 base, vec3 blend, float opacity) {
    return (blendAverage(base, blend) * opacity + base * (1.0 - opacity));
}
float blendScreen(float base, float blend) {
    return 1.0-((1.0-base)*(1.0-blend));
}
vec3 blendScreen(vec3 base, vec3 blend) {
    return vec3(blendScreen(base.r, blend.r), blendScreen(base.g, blend.g), blendScreen(base.b, blend.b));
}
vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}
float blendSoftLight(float base, float blend) {
    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}
vec3 blendSoftLight(vec3 base, vec3 blend) {
    return vec3(blendSoftLight(base.r, blend.r), blendSoftLight(base.g, blend.g), blendSoftLight(base.b, blend.b));
}
vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
    return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}
float blendSubtract(float base, float blend) {
    return max(base+blend-1.0, 0.0);
}
vec3 blendSubtract(vec3 base, vec3 blend) {
    return max(base+blend-vec3(1.0), vec3(0.0));
}
vec3 blendSubtract(vec3 base, vec3 blend, float opacity) {
    return (blendSubtract(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendExclusion(vec3 base, vec3 blend) {
    return base+blend-2.0*base*blend;
}
vec3 blendExclusion(vec3 base, vec3 blend, float opacity) {
    return (blendExclusion(base, blend) * opacity + base * (1.0 - opacity));
}
vec3 blendDifference(vec3 base, vec3 blend) {
    return abs(base-blend);
}
vec3 blendDifference(vec3 base, vec3 blend, float opacity) {
    return (blendDifference(base, blend) * opacity + base * (1.0 - opacity));
}
float blendAdd(float base, float blend) {
    return min(base+blend, 1.0);
}
vec3 blendAdd(vec3 base, vec3 blend) {
    return min(base+blend, vec3(1.0));
}
vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
    return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
}{@}conditionals.glsl{@}vec4 when_eq(vec4 x, vec4 y) {
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
}{@}contrast.glsl{@}vec3 adjustContrast(vec3 color, float c, float m) {
	float t = 0.5 - c * 0.5;
	color.rgb = color.rgb * c + t;
	return color * m;
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
}{@}luma.fs{@}float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}{@}BasicMirror.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMirrorReflection;
uniform mat4 uMirrorMatrix;

#!VARYINGS
varying vec4 vMirrorCoord;

#!SHADER: BasicMirror.vs
void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vMirrorCoord = uMirrorMatrix * worldPos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

#!SHADER: BasicMirror.fs
void main() {
    gl_FragColor.rgb = vec3(texture2D(tMirrorReflection, vMirrorCoord.xy / vMirrorCoord.w));
    gl_FragColor.a = 1.0;
}{@}normalmap.glsl{@}vec3 unpackNormal( vec3 eye_pos, vec3 surf_norm, sampler2D normal_map, float intensity, float scale, vec2 uv ) {
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

//mvPosition.xyz, normalMatrix * normal, normalMap, intensity, scale, uv{@}range.glsl{@}

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
}{@}rgbshift.fs{@}vec4 getRGB(sampler2D tDiffuse, vec2 uv, float angle, float amount) {
    vec2 offset = vec2(cos(angle), sin(angle)) * amount;
    vec4 r = texture2D(tDiffuse, uv + offset);
    vec4 g = texture2D(tDiffuse, uv);
    vec4 b = texture2D(tDiffuse, uv - offset);
    return vec4(r.r, g.g, b.b, g.a);
}{@}rotation.glsl{@}mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}{@}simplenoise.glsl{@}float getNoise(vec2 uv, float time) {
    float x = uv.x * uv.y * time * 1000.0;
    x = mod(x, 13.0) * mod(x, 123.0);
    float dx = mod(x, 0.01);
    float amount = clamp(0.1 + dx * 100.0, 0.0, 1.0);
    return amount;
}

#test Device.mobile
float sinf(float x) {
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
#endtest

#test !Device.mobile
    #define sinf sin
#endtest

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
    noise += (sinf(v.x * 0.9 / s + t * 10.0) + sinf(v.x * 2.4 / s + t * 15.0) + sinf(v.x * -3.5 / s + t * 4.0) + sinf(v.x * -2.5 / s + t * 7.1)) * 0.3;
    noise += (sinf(v.y * -0.3 / s + t * 18.0) + sinf(v.y * 1.6 / s + t * 18.0) + sinf(v.y * 2.6 / s + t * 8.0) + sinf(v.y * -2.6 / s + t * 4.5)) * 0.3;
    return noise;
}

float cnoise(vec2 v) {
    float t = v.x * 0.3;
    v.y *= 0.8;
    float noise = 0.0;
    float s = 0.5;
    noise += (sinf(v.x * 0.9 / s + t * 10.0) + sinf(v.x * 2.4 / s + t * 15.0) + sinf(v.x * -3.5 / s + t * 4.0) + sinf(v.x * -2.5 / s + t * 7.1)) * 0.3;
    noise += (sinf(v.y * -0.3 / s + t * 18.0) + sinf(v.y * 1.6 / s + t * 18.0) + sinf(v.y * 2.6 / s + t * 8.0) + sinf(v.y * -2.6 / s + t * 4.5)) * 0.3;
    return noise;
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
}{@}VideoCubeShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uUVScale;
uniform vec2 uUVPosition;
uniform vec4 uFresnelParams;
uniform float uWhite;
uniform float uBig;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vMvPos;
varying vec3 vWorldNormal;
varying vec3 vWorldPos;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vMvPos = vec3(modelViewMatrix * vec4(pos, 1.0));
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    vWorldNormal = normalMatrix * normal;
    vUv = uv;
}

#!SHADER: Fragment

#require(normalmap.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(rgbshift.fs)
#require(blendmodes.glsl)

void main() {
    vec2 position = uUVPosition;
    position.x += sin(time*0.02)*0.1;
    position.y += cos(time*0.02)*0.1;

    vec2 uv = scaleUV(vUv, vec2(uUVScale, uUVScale*(9.0/16.0)), position);

    vec3 color = getRGB(tMap, uv, 0.2, abs(sin(time*0.2))*0.001*(1.0-uBig)).rgb;
    float fresnel = uFresnelParams.x + uFresnelParams.y * pow(1.0 + dot(normalize(vMvPos), normalize(vWorldNormal)), uFresnelParams.z);

    //color *= 0.85;//mix(fresnel, 0.8, 0.5);

    color *= smoothstep(2.2, 0.0, length(vUv-0.5));

    float borderWidth = 0.02;
    float padding = 0.0015;
    float border = smoothstep(borderWidth, borderWidth-padding, vUv.x);
    border += smoothstep(1.0-borderWidth, 1.0-borderWidth+padding, vUv.x);
    border += smoothstep(borderWidth, borderWidth-padding, vUv.y);
    border += smoothstep(1.0-borderWidth, 1.0-borderWidth+padding, vUv.y);

    color = mix(color, vec3(getNoise(vUv, time)*0.85), uWhite);
    color = mix(color, vec3(1.0), min(1.0, border)*0.015);
    color = blendOverlay(color, vec3(1.0), min(1.0, border)*2.5);

    //color *= 1.0 + cnoise(vec3(vPos.y)*2.0+time*1.5)*0.2;


    color += getNoise(vUv, time) * 0.1;

    #test !Platform.usingVR()
    vec2 uvRepeat = fract(vUv * 50.0) - 0.5;
    float radius = crange(length(cameraPosition - vWorldPos), 2.0, 4.0, 0.8, 0.0);
    float circle = 1.0 - smoothstep(radius - radius*0.1, radius, length(uvRepeat));
    if (circle > 0.5) discard;
    #endtest

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}FireShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tFireMap;
uniform sampler2D tNoiseMap;
uniform sampler2D tMap;
uniform float uAlpha;
uniform vec3 uColor;
uniform float uDistortAmount;
uniform float uDistortSpeed;
uniform float uRave;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vMvPos;
varying vec3 vWorldNormal;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vMvPos = vec3(modelViewMatrix * vec4(pos, 1.0));
    vWorldNormal = normalMatrix * normal;
}

#!SHADER: Fragment

#require(normalmap.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(rgbshift.fs)
#require(blendmodes.glsl)

void main() {
    vec2 noiseUV = vec2(vUv.x, vUv.y - time * uDistortSpeed);
    vec4 noiseTexture = texture2D(tNoiseMap, noiseUV);

    vec2 fireUV = mix(vUv, vec2(noiseTexture.rgb), uDistortAmount);
    vec4 fireTexture = texture2D(tFireMap, fireUV);

    vec3 uColor2 = uColor;

    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 videoUV = scaleUV(vUv, vec2(100.0), origin);
        vec3 video = texture2D(tMap, videoUV).rgb;

        uColor2 = video * vec3(uRave);
    }

    vec4 color = fireTexture * vec4(uColor2, 1.0);

    gl_FragColor = color;
    gl_FragColor.a *= uAlpha * smoothstep(0.0, 0.3, 1.0-vUv.y);
}{@}BakedAnimationShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tAnimation;
uniform float uFrames;
uniform vec3 uBoundingBoxMin;
uniform vec3 uBoundingBoxMax;
uniform float uAnimationMix;
uniform float uSpeed;

#!VARYINGS
varying vec2 vUv;
varying vec3 vNormal;

#!SHADER: Vertex
#require(range.glsl)

vec3 getInterpolatedTexture(sampler2D tAnimation, vec2 uv, float frames, float index) {
    vec2 st = uv;

    // select first frame (frames run top to bottom in the texture)
    // st.y = 1.0 - st.y;
    // st.y /= (2048.0 / (uFrames * 3.0)); 
    // st.y = 1.0 - st.y;

    float t = index;
    vec2 frameOffsetY = vec2(0.0, 1.0 / frames) * floor(fract(t / frames) * frames);
    // vec2 nextFrameOffsetY = vec2(0.0, 1.0 / frames) * floor(fract(t / frames) * frames) + vec2(0.0, 1.0 / frames);
    vec3 frame = texture2D(tAnimation, st - frameOffsetY).rgb;
    // vec3 nextFrame = texture2D(tAnimation, st - nextFrameOffsetY).rgb;
    // frame = mix(frame, nextFrame, fract(t));
    return frame;
}

void main() {
    float t = fract(time * uSpeed) * uFrames;

    vec3 color = getInterpolatedTexture(tAnimation, uv2, uFrames, t).rgb;
    color = crange(color, vec3(0.0), vec3(1.0), uBoundingBoxMin, uBoundingBoxMax);

    color = mix(position, color, uAnimationMix);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(color, 1.0);

    vUv = uv;
    vNormal = normal;
}

#!SHADER: Fragment
void main() {
    float lighting = dot(vNormal, vec3(1.0, 0.5, 0.0));
    float bouncelighting = dot(vNormal * -1.0, vec3(1.0, 0.5, 0.0));
    vec3 color = vec3(max(lighting, 0.3)) + bouncelighting * 0.25;
    
    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}BigScreenVideoShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tDefault;
uniform float uAlpha;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform float uUseDefault;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying float vFog;
varying vec3 vMvPos;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vMvPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment

#require(simplenoise.glsl)
#require(range.glsl)
#require(rgbshift.fs)

void main() {
    vec3 color = getRGB(tMap, vUv, 0.1, 0.001).rgb;

    if (uUseDefault > 0.0) {
        vec3 image = getRGB(tDefault, vUv, 0.1, 0.001).rgb;
        //image += crange(getNoise(vUv, time), 0.0, 1.0, -1.0, 1.0)*0.1;
        color = mix(color, image, uUseDefault);
    }
    //color *= 1.0 + crange(getNoise(vUv, time), 0.0, 1.0, -1.0, 1.0)*0.1;

    float alpha = uAlpha;
    //color *= 0.6+cnoise(vec3(vUv*5.0,time*0.5))*0.4;

    //color = mix(color, uFogColor, vFog);

    //color = mix(color, vec3(getNoise(vUv, time)*0.7), uUseDefault);

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}WirescreenVideoShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tDefault;
uniform float uAlpha;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform float uUseDefault;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying float vFog;
varying float vLuma;
varying vec3 vMvPos;

#!SHADER: Vertex
#require(range.glsl)
#require(rgb2hsv.fs)
#require(simplenoise.glsl)

void main() {
    vUv = uv;
    vec3 pos = position;

    vec3 color = texture2D(tMap, vUv).rgb;
    vLuma = rgb2hsv(color).z;

    float padding = 0.1;
    vLuma *= smoothstep(-padding, padding, vUv.x) * smoothstep(-padding, padding, 1.0-vUv.x);
    padding *= (16.0/9.0);
    vLuma *= smoothstep(-padding, padding, vUv.y) * smoothstep(-padding, padding, 1.0-vUv.y);


    pos.z += vLuma*4.0;
    pos.z += cnoise(pos*3.0+time*0.1)*0.5;
    pos.z += cnoise(pos*1.2+time*0.1)*0.5;

    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vMvPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment

#require(simplenoise.glsl)
#require(range.glsl)
#require(rgbshift.fs)

void main() {
    vec3 color = getRGB(tMap, vUv, 0.1, 0.001).rgb;

    if (uUseDefault > 0.0) {
        vec3 image = getRGB(tDefault, vUv, 0.1, 0.001).rgb;
        //image += crange(getNoise(vUv, time), 0.0, 1.0, -1.0, 1.0)*0.1;
        color = mix(color, image, uUseDefault);
    }

    color *= smoothstep(0.0, 0.2, vLuma);

    float alpha = uAlpha;
    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
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
}{@}FireworksParticle.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tLife;
uniform sampler2D tColor;
uniform float uSize;
uniform float uRave;

#!VARYINGS
varying vec4 vRandom;
varying float vLife;
varying vec3 vColor;
varying vec3 vPos;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec4 texel = texture2D(tPos, position.xy);
    vec3 pos = texel.xyz;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

    float life =  texture2D(tLife, position.xy).r;
    vLife = smoothstep(0.2, 1.0, life);
    vColor = texture2D(tColor, position.xy).rgb;
    vPos = pos;

    gl_PointSize = 0.3 * uSize * crange(random.w, 0.0, 1.0, 0.5, 1.5) * (1000.0 / length(mvPosition.xyz));
    gl_PointSize *= vLife;
    gl_Position = projectionMatrix * mvPosition;

    vRandom = random;
}

#!SHADER: Fragment

    #require(range.glsl)
    #require(transformUV.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);

    float alpha = 1.0;
    alpha *= smoothstep(0.0, 0.5, vLife);
    alpha *= smoothstep(0.45, 0.0, length(uv-0.5));

    vec3 color = vColor;
    color = rgb2hsv(color);
    color.x += (vLife + vRandom.y*0.2 + vRandom.z*0.1 + vRandom.x*0.1 + time*0.2)*0.5;
    color = hsv2rgb(color);

    color = mix(color, vec3(1.0), smoothstep(0.5, 1.2, vLife));

    alpha *= mix(1.0, 0.5+sin(time*40.0+vRandom.z*20.0)*0.5, smoothstep(0.8, 0.0, vLife));

    alpha = mix(alpha*0.8, alpha, smoothstep(0.0, 0.7, uRave));

    gl_FragColor = vec4(color, alpha);
}{@}FireworksPreset.fs{@}void main() {
    vec3 pos2 = random.xyz;
    pos2.x = crange(random.x, 0.0, 1.0, -1.0, 1.0) * crange(spawn.r, 1., .5, 1., 0.);
    pos2.y = crange(random.y, 0.0, 1.0, -1.0, 1.0) * crange(spawn.r, 1., .5, 1., 0.);
    pos2.z = crange(random.z, 0.0, 1.0, -1.0, 1.0) * crange(spawn.r, 1., .5, 1., 0.);
    pos.xyz += normalize(pos2.xyz) * 0.01 * uRadiusStrength * crange(spawn.r, 1., 0.6, 1., .20);

    pos.y -= uGravity * .1 * crange(spawn.r, 1., 0.2, 0., 1.) * crange(random.y, 0., 1., .8, 2.);
}{@}FireworksPresetCurl.fs{@}void main() {
    vec3 curl = curlNoise(pos * uCurlNoiseScale*0.1 + (time * uCurlTimeScale * 0.1));
    pos += curl * uCurlNoiseSpeed * 0.01 * crange(spawn.r, 1., .5, .1, 1.);
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
}{@}ProtonAntimatter.fs{@}uniform sampler2D tOrigin;
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
}{@}Text3D.glsl{@}#!ATTRIBUTES
attribute vec3 animation;

#!UNIFORMS
uniform sampler2D tMap;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec3 uTranslate;
uniform vec3 uRotate;
uniform float uTransition;
uniform float uWordCount;
uniform float uLineCount;
uniform float uLetterCount;
uniform float uByWord;
uniform float uByLine;
uniform float uPadding;
uniform vec3 uBoundingMin;
uniform vec3 uBoundingMax;

#!VARYINGS
varying float vTrans;
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

#require(range.glsl)
#require(eases.glsl)
#require(rotation.glsl)
#require(conditionals.glsl)

void main() {
    vUv = uv;
    vTrans = 1.0;

    vec3 pos = position;

    if (uTransition < 5.0) {
        float padding = uPadding;
        float letter = (animation.x + 1.0) / uLetterCount;
        float word = (animation.y + 1.0) / uWordCount;
        float line = (animation.z + 1.0) / uLineCount;

        float letterTrans = crange(uTransition, letter - padding, letter + padding, 0.0, 1.0);
        float wordTrans = crange(uTransition, word - padding, word + padding, 0.0, 1.0);
        float lineTrans = crange(uTransition, line - padding, line + padding, 0.0, 1.0);

        vTrans = mix(cubicOut(letterTrans), cubicOut(wordTrans), uByWord);
        vTrans = mix(vTrans, cubicOut(lineTrans), uByLine);

        float invTrans = (1.0 - vTrans);
        vec3 nRotate = normalize(uRotate);
        vec3 axisX = vec3(1.0, 0.0, 0.0);
        vec3 axisY = vec3(0.0, 1.0, 0.0);
        vec3 axisZ = vec3(0.0, 0.0, 1.0);
        vec3 axis = mix(axisX, axisY, when_gt(nRotate.y, nRotate.x));
        axis = mix(axis, axisZ, when_gt(nRotate.z, nRotate.x));
        pos = vec3(vec4(position, 1.0) * rotationMatrix(axis, radians(max(max(uRotate.x, uRotate.y), uRotate.z) * invTrans)));
        pos += uTranslate * invTrans;
    }

    vPos = pos;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(msdf.glsl)
#require(simplenoise.glsl)

vec2 getBoundingUV() {
    vec2 uv;
    uv.x = crange(vPos.x, uBoundingMin.x, uBoundingMax.x, 0.0, 1.0);
    uv.y = crange(vPos.y, uBoundingMin.y, uBoundingMax.y, 0.0, 1.0);
    return uv;
}

void main() {
    float alpha = msdf(tMap, vUv);

    //float noise = 0.5 + smoothstep(-1.0, 1.0, cnoise(vec3(vUv*50.0, time* 0.3))) * 0.5;

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha * uAlpha * vTrans;
}
{@}UnrealBloom.fs{@}uniform sampler2D tUnrealBloom;

vec3 getUnrealBloom(vec2 uv) {
    return texture2D(tUnrealBloom, uv).rgb;
}{@}UnrealBloomComposite.glsl{@}#!ATTRIBUTES

#!UNIFORMS

uniform sampler2D blurTexture1;
uniform float bloomStrength;
uniform float bloomRadius;
uniform vec3 bloomTintColor;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

float lerpBloomFactor(const in float factor) {
    float mirrorFactor = 1.2 - factor;
    return mix(factor, mirrorFactor, bloomRadius);
}

void main() {
    gl_FragColor = bloomStrength * (lerpBloomFactor(1.0) * vec4(bloomTintColor, 1.0) * texture2D(blurTexture1, vUv));
}{@}UnrealBloomGaussian.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D colorTexture;
uniform vec2 texSize;
uniform vec2 direction;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

float gaussianPdf(in float x, in float sigma) {
    return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;
}

void main() {
    vec2 invSize = 1.0 / texSize;
    float fSigma = float(SIGMA);
    float weightSum = gaussianPdf(0.0, fSigma);
    vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
    for(int i = 1; i < KERNEL_RADIUS; i ++) {
        float x = float(i);
        float w = gaussianPdf(x, fSigma);
        vec2 uvOffset = direction * invSize * x;
        vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
        vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
        diffuseSum += (sample1 + sample2) * w;
        weightSum += 2.0 * w;
    }
    gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
}{@}UnrealBloomLuminosity.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tDiffuse;
uniform vec3 defaultColor;
uniform float defaultOpacity;
uniform float luminosityThreshold;
uniform float smoothWidth;

#!VARYINGS
varying vec2 vUv;

#!SHADER: Vertex.vs
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}

#!SHADER: Fragment.fs

#require(luma.fs)

void main() {
    vec4 texel = texture2D(tDiffuse, vUv);
    float v = luma(texel.xyz);
    vec4 outputColor = vec4(defaultColor.rgb, defaultOpacity);
    float alpha = smoothstep(luminosityThreshold, luminosityThreshold + smoothWidth, v);
    gl_FragColor = mix(outputColor, texel, alpha);
}{@}UnrealBloomPass.fs{@}#require(UnrealBloom.fs)

void main() {
    vec4 color = texture2D(tDiffuse, vUv);
    color.rgb += getUnrealBloom(vUv);
    gl_FragColor = color;
}{@}Composite.fs{@}uniform float uBloomStrength;
uniform float uRGBStrength;

#require(UnrealBloom.fs)
#require(rgbshift.fs)
#require(range.glsl)

void main() {
    gl_FragColor = texture2D(tDiffuse, vUv);//getRGB(tDiffuse, vUv, 0.2, uRGBStrength * 0.003);
    gl_FragColor.a = 1.0;
    gl_FragColor.rgb += getUnrealBloom(vUv) * uBloomStrength;
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
}{@}AnimatedBird.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tAnimation;

#!VARYINGS
varying vec2 vUv;
varying vec3 vNormal;

#!SHADER: Vertex
#require(range.glsl)

vec3 getAnimationPos(sampler2D tAnimation, float frameCount, float speed) {
    float t = time * speed;

    vec2 frameOffset = vec2(1.0 / frameCount, 0.0) * floor(fract(t) * frameCount);
    vec2 nextFrameOffset = mod(frameOffset + vec2(1.0 / frameCount, 0.0), vec2(1.0, 0.0));

    vec3 frame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + frameOffset).rgb;
    vec3 nextFrame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + nextFrameOffset).rgb;

    frame = mix(frame, nextFrame, fract(t * frameCount));

    vec3 res = vec3(0.0);

    res.x += crange(frame.r, 0.0, 1.0, -1.0, 1.0);
    res.y += crange(frame.g, 0.0, 1.0, -1.0, 1.0);
    res.z += crange(frame.b, 0.0, 1.0, -1.0, 1.0);

    return res;
}

void main() {
    float flapStrength = pow((sin(time) + 1.0) / 2.0, 2.0);
    float glideStrength = 0.3;

    float speed = 2.6;
    float frameCount = 12.0;
    vec3 flapAnimation = getAnimationPos(tAnimation, frameCount, speed);
    vec3 glideAnimation = vec3(0.0, cos(position.x + time * speed) * (1.0 - flapStrength), 0.0);
    vec3 changedPos = position
        + flapAnimation * flapStrength
        + glideAnimation * glideStrength;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(changedPos, 1.0);
    vUv = uv;
    vNormal = normal;
}

#!SHADER: Fragment
#require(range.glsl)

void main() {
    gl_FragColor.rgb = vec3(1.0) * (1.0 + dot(vec3(0.2, 1.0, 0.8), vNormal.xyz)) / 2.0 + vec3(0.0, 0.0, 0.3);
    gl_FragColor.a = 1.0;
}{@}InstancedBirdParticles.glsl{@}#!ATTRIBUTES
attribute vec3 lookup;
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tPos;
uniform sampler2D tPrevPos;
uniform sampler2D tAnimation;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uAltColor1;
uniform vec3 uAltColor2;
uniform float uEnabled;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vVel;
// varying vec3 vPrevPos;

#!SHADER: Vertex
#require(range.glsl)
#require(instance.vs)

vec3 getAnimationPos(sampler2D tAnimation, float frameCount, float speed, float offset) {
    float t = time * speed + offset;

    vec2 frameOffset = vec2(1.0 / frameCount, 0.0) * floor(fract(t) * frameCount);
    vec2 nextFrameOffset = mod(frameOffset + vec2(1.0 / frameCount, 0.0), vec2(1.0, 0.0));

    vec3 frame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + frameOffset).rgb;
    vec3 nextFrame = texture2D(tAnimation, vec2(uv.x / frameCount, uv.y) + nextFrameOffset).rgb;

    frame = mix(frame, nextFrame, fract(t * frameCount));

    vec3 res = vec3(0.0);

    res.x += crange(frame.r, 0.0, 1.0, -1.0, 1.0);
    res.y += crange(frame.g, 0.0, 1.0, -1.0, 1.0);
    res.z += crange(frame.b, 0.0, 1.0, -1.0, 1.0);

    return res;
}

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
  }

void main() {
    float scale = 0.2 + random.y * 0.05;
    vec3 offset = texture2D(tPos, lookup.xy).xyz;
    vec3 prevpos = texture2D(tPrevPos, lookup.xy).xyz;
    vec3 velocity = offset - prevpos;

    // Flap wings
    float upwardDirection = dot(vec3(0.0, 1.0, 0.0), velocity);
    vec3 localpos = position;
    float speed = 2.6;
    float frameCount = 12.0;
    float animationOffset = random.x * 400.0;

    float flapStrength = pow((sin(time + animationOffset) + 1.0) / 2.0, 2.0);
    float glideStrength = 0.3;
    
    vec3 flapAnimation = getAnimationPos(tAnimation, frameCount, speed, animationOffset);
    vec3 glideAnimation = vec3(0.0, cos(position.x + time * speed + animationOffset) * (1.0 - flapStrength) * glideStrength + cos(offset.x + time * speed), 0.0);
    
    float flapFactor = clamp(pow(length(velocity), 2.0) * 2000.0, 0.0, 1.0);
    flapFactor = crange(flapFactor, 0.5, 1.0, 0.0, 1.0);

    localpos = localpos 
        + mix(glideAnimation, flapAnimation, flapFactor);

    // Rotate in direction of flight
    float angle = atan(velocity.x, velocity.z);
    localpos.xz = rotate(localpos.xz, angle);

    vec3 pos = transformPosition(localpos, offset, scale);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vUv = uv;
    vPos = pos;
    vNormal = normal;
    vVel = velocity;
}

#!SHADER: Fragment
void main() {
    vec3 lightDir = vec3(0.5, 0.5, 0.5);
    float dp = dot(lightDir, vNormal);

    vec3 color = vec3(1.0);
    color = mix(uColor1, uColor2, dp);
    vec3 altColor = mix(uAltColor1, uAltColor2, dp);

    color = mix(color, altColor, uEnabled);

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}CubeFloorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uGridScale;
uniform float uGridClamp;
uniform float uTimeOffset;
uniform vec2 uFadeRange;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
    #require(rgbshift.fs)

float grid(vec2 st, float res) {
    vec2 grid = fract(st*res);
    return (step(res,grid.x) * step(res,grid.y));
}


void main() {
    vec2 uv = scaleUV(vUv, vec2(2.0));
    uv = rotateUV(uv, -time*0.1+uTimeOffset);

    if (uv.x > 0.5) uv.x = 1.0-uv.x;
    uv = rotateUV(uv, time*0.2);

    vec3 color = getRGB(tMap, uv*.5, time*0.2+uTimeOffset, sin(time)*0.001).rgb;
    color = mix(color, vec3(1.0), 0.02);

    vec2 grid_uv = vUv * uGridScale;

    float gridSpacing = uGridClamp;
    float alpha = grid(grid_uv, uGridClamp);

    alpha *= 1.0 + cnoise(vec3(vUv*50.0,-time*0.5+uTimeOffset)) * 0.5;

    //alpha *= step(0.5, fract(vUv.x*10.0+time*0.3));
    float stripes = fract(vPos.y*5.0-time*0.1);
    stripes = smoothstep(0.25+sin(time*0.15)*0.2, 0.5, stripes) * smoothstep(0.75+sin(time*0.15)*0.2, 0.5, stripes);
    alpha *= mix(1.0, stripes, abs(sin(time*0.2))*0.9);


    vec3 firePos = vPos;
    firePos.x *= 1.5;
    firePos.y *= 5.0;
    firePos.z *= 1.5;
    float fireNoise = cnoise(firePos-time*0.1);
    alpha *= mix(1.0, abs(fireNoise), 0.7);

    //alpha *= smoothstep(0.5, 0.0, length(vUv-0.5));
    float noise = cnoise(vPos *3.0 + time*0.05);
    noise = mix(noise, cnoise(vPos *10.0 - time*0.05), 0.1);
    alpha *= 0.55+noise*0.45;


    alpha *= crange(vPos.x, uFadeRange.x, uFadeRange.y, 0.0, 1.0);

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha*uAlpha;
}{@}GlassFloorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform vec3 uColor;
uniform float uNoiseScale;
uniform float uNoiseTime;
uniform float uNoiseMix;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    float alpha = uAlpha;
    alpha *= 1.0 + cnoise(vPos*uNoiseScale+time*uNoiseTime) * uNoiseMix;

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = alpha;
}{@}GrassFloorShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tGrass;
uniform sampler2D tWind;
uniform sampler2D tVideo;

uniform vec4 uGrassParams;
uniform vec4 uWindParams;
uniform vec2 uWindDirection;

uniform vec4 uNoiseStrength;
uniform vec4 uGrassStrength;
uniform vec4 uWindStrength;

uniform vec4 uFresnelParams;
uniform vec4 uFogParams;

uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uPathColor0;
uniform vec3 uFogColor;
uniform vec3 uSunsetColor;


uniform float uRave;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec2 uFadeBack;

#!VARYINGS
varying vec3 vNormal;
varying vec3 vWorldNormal;
varying vec3 vMvPos;
varying vec3 vPos;
varying vec2 vUv;
varying float vFog;
varying float vFade;
varying float vPath;
varying float vLightMask;
varying float vUnderside;
varying vec3 vWorldPos;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec3 pos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vWorldNormal = normalMatrix * normal;
    vMvPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vUv = uv;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normal;
    vPath = vdata.r;
    vPos = pos;

    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));
    vLightMask = max(1.0 - distance((modelMatrix * vec4(position, 1.0)).xyz, vec3(0.0, -10.0, -140.0)) * 0.01, 0.05);
}

#!SHADER: Fragment

#require(shadows.fs)
#require(transformUV.glsl)
#require(range.glsl)
#require(blendmodes.glsl)

vec3 linearToSRGB(vec3 color) {
    return pow(color, vec3(1.0 / 2.2));
}

vec3 SRGBtoLinear(vec3 srgb) {
    vec3 linOut = pow(srgb.xyz, vec3(2.2));
    return vec3(linOut);
}

void main() {
    float wind = texture2D(tWind, vUv * uWindParams.xy + uWindDirection * time * 0.8).r * uGrassStrength.z;
    vec2 winduv = vUv * uGrassParams.xy + uWindDirection * wind * uNoiseStrength.w * (1.0 - vPath);

    vec4 grassLayer1 = texture2D(tGrass, winduv);
    float pathmask = smoothstep(uGrassParams.z, uGrassParams.w, vPath * grassLayer1.r);

    float shadow = getShadow(vPos + vec3(0.0, 0.0, grassLayer1.r));

    float fresnel = uFresnelParams.x + uFresnelParams.y * pow(1.0 + dot(normalize(vMvPos), normalize(vWorldNormal)), uFresnelParams.z);
    float fresnelWind = uNoiseStrength.x + uNoiseStrength.y * pow(1.0 + dot(normalize(vMvPos), normalize(vWorldNormal)), uNoiseStrength.z);
    float contribution = 0.0;

    contribution += clamp(smoothstep(0.4 - wind * 0.4, 0.5 - wind * 0.5, grassLayer1.g) * fresnel * smoothstep(0.05, 0.1, wind) * uGrassStrength.y, 0.0, 1.0) * shadow;
    contribution += wind * fresnelWind * uWindStrength.x;
    contribution += smoothstep(0.2 - wind * 0.2, 0.5 - wind * 0.5, grassLayer1.b) * 1.0 * fresnel * 4.0 * smoothstep(0.1, 0.9, wind) * vUv.y * uGrassStrength.w;

    vec3 baseColor = mix(uColor0, vec3(0.0), uRave);
    vec3 grassColor = SRGBtoLinear(baseColor);

    vec3 highlightColor = uColor1;
    vec3 shadowColor = uColor3;
    vec3 pathColor = uPathColor0 * fresnel + grassLayer1.b * 0.5;

    float colorRange = 1.0;

    if (uRave > 0.0) {

        vec2 origin = vec2(0.2, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(10.0), origin);
        vec3 videoTex = texture2D(tVideo, colorUV).rgb;
        colorRange = mix(colorRange, smoothstep(uRaveRange.x, uRaveRange.y, abs(length(vPos-uRavePos))), smoothstep(0.5, 1.0, uRave));
        pathColor = mix(pathColor, max(pathColor*0.04, videoTex * colorRange * 0.2), smoothstep(0.5, 1.0, uRave));
        videoTex *= colorRange;
        highlightColor = mix(highlightColor, max(highlightColor*0.04, videoTex), smoothstep(0.5, 1.0, uRave));
        //pathColor *= mix(1.0, vLightMask, uRave);
    }
    grassColor = mix(grassColor, pathColor, pathmask * mix(1.0, 0.15, uRave));

    grassColor += contribution * highlightColor * mix(1.0, 1.1, uRave);
    grassColor += fresnel * mix(uColor2, grassColor*0.04, uRave) * mix(grassLayer1.r, 1.0, uWindStrength.y);
    grassColor *= mix(min(shadow + shadowColor, vec3(1.0)), vec3(1.0), smoothstep(0.5, 1.0, uRave));

    vec3 color = linearToSRGB(grassColor);
    // color = mix(color, pathColor, pathmask);
    color = mix(color, uFogColor, vFog * (1.0-uRave));
    color = mix(color, color*0.2, smoothstep(uFadeBack.x, uFadeBack.y, vPos.z) * smoothstep(1.2, 0.5, uRave));

    color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color = mix(color, blendSoftLight(color, uSunsetColor), smoothstep(0.8, 1.3, uRave));

    //if (!gl_FrontFacing) color = vec3(0.0);
//     float fade = smoothstep(1.0, 2.0, length(cameraPosition - vWorldPos));
//     if (fade == 0.0) discard;

    #test !Platform.usingVR()
    vec2 uvRepeat = fract(vUv * 3000.0) - 0.5;
    float radius = crange(length(cameraPosition - vWorldPos), 1.0, 2.0, 0.6, 0.0);
    float circle = 1.0 - smoothstep(radius - radius*0.1, radius, length(uvRepeat));
    if (circle > 0.5) discard;
    #endtest

    gl_FragColor = vec4(color, 1.0);
}{@}GridFloorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uScale;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)

float grid(vec2 st, float res) {
    vec2 grid = fract(st*res);
    return (step(res,grid.x) * step(res,grid.y));
}

void main() {
    vec3 color = vec3(1.0);

    vec2 grid_uv = vUv * uScale;
    float alpha = 1.0-grid(grid_uv, 0.01);

    alpha *= smoothstep(0.5, 0.0, length(vUv-0.5));
    alpha *= 0.6+cnoise(vec3(vUv*10.0,time*0.5))*0.4;

    //alpha *= 0.02+fract(length(vUv-0.5)*20.0-time*0.2)*0.3 * smoothstep(0.5, 0.0, length(vUv-0.5)) * smoothstep(0.0, 0.05, length(vUv-0.5));

    gl_FragColor.rgb = vec3(1.0);
    gl_FragColor.a = alpha * uAlpha;
}{@}VideoFloorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uGridScale;
uniform float uGridClamp;
uniform float uTimeOffset;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
    #require(rgbshift.fs)

float grid(vec2 st, float res) {
    vec2 grid = fract(st*res);
    return (step(res,grid.x) * step(res,grid.y));
}


void main() {
    vec2 uv = scaleUV(vUv, vec2(2.0));
    uv = rotateUV(uv, -time*0.1+uTimeOffset);

    if (uv.x > 0.5) uv.x = 1.0-uv.x;
    uv = rotateUV(uv, time*0.2);

    vec3 color = getRGB(tMap, uv*.5, time*0.2+uTimeOffset, sin(time)*0.01).rgb;

    color = mix(color, vec3(1.0), 0.02);

    vec2 grid_uv = vUv * uGridScale;

    float gridSpacing = uGridClamp;
    float alpha = grid(grid_uv, uGridClamp);

    alpha *= 1.0 + cnoise(vec3(vUv*50.0,-time*0.5+uTimeOffset)) * 0.5;

    //alpha *= smoothstep(0.5, 0.0, length(vUv-0.5));
    //alpha *= 0.6+cnoise(vec3(vUv*5.0,time*0.5))*0.4;

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha*uAlpha;
}{@}GreyboxShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec4 uFresnelParams;
uniform sampler2D tVideo;
uniform float uRave;

#!VARYINGS
varying vec3 vMvPos;
varying vec3 vWorldNormal;
varying vec2 vUv;

#!SHADER: Vertex
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vMvPos = vec3(modelViewMatrix * vec4(position, 1.0));
    vWorldNormal = normalMatrix * normal;
    vUv = uv;
}

#!SHADER: Fragment

#require(normalmap.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(rgb2hsv.fs)
#require(transformUV.glsl)

void main() {
    vec4 tex = texture2D(tMap, vUv);
    float fresnel = uFresnelParams.x + uFresnelParams.y * pow(1.0 + dot(normalize(vMvPos), normalize(vWorldNormal)), uFresnelParams.z);
    fresnel *= (1.0 - tex.r);

    vec3 color = vec3(fresnel);

//    if (uRave > 0.0) {
//        vec2 origin = vec2(0.15, 0.5);
//        origin.x += sin(time*0.05)*0.1;
//        origin.y += cos(time*0.05)*0.1;
//        vec2 colorUV = scaleUV(vUv, vec2(150.0), origin);
//        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
//        color = mix(color, blendOverlay(color*0.8, videoColor), uRave);
//    }

    gl_FragColor = vec4(color, 1.0);
}{@}RockShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tNormal;
uniform sampler2D tMRO;
uniform float uSaturation;
uniform float uHue;
uniform float uBrightness;
uniform float uNormalIntensity;
uniform float uTile;
uniform float uAOMix;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec3 uMultiplyColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    vec2 uv = vUv * uTile;
    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(uv.x, uv.y));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(uv.x, uv.y));
    vec3 normalTex = (n1 + n2) / 2.0;

    vec3 color = texture2D(tMap, vUv).rgb * uMultiColor;
    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float AO = texture2D(tMRO, vUv).b;
    color *= mix(1.0, AO, uAOMix);

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel);
    color = mix(color, uFogColor, vFog);

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}MirrorFloor.glsl{@}#!ATTRIBUTES


#!UNIFORMS
uniform float uAlpha;
uniform float uFade;
uniform float uWarp;
uniform float uWarpSpeed;
uniform float uWarpScale;
uniform float uScale;
uniform sampler2D tMirrorReflection;
uniform mat4 uMirrorMatrix;
uniform sampler2D tNormal;
uniform sampler2D tRoughness;
uniform vec2 uNormalRange;
uniform vec2 uRoughnessRange;
uniform float uNormalIntensity;
uniform float uTile;
uniform float uDarken;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying float vDist;
varying float vCenter;
varying vec4 vMirrorCoord;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec4 vModelViewPos;

#!SHADER: Vertex

#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;

    vCenter = smoothstep(0.3, 0.45, length(uv-0.5));
    vPos = pos;
    vUv = uv;

    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vec4 modelViewPos = modelViewMatrix * vec4(pos, 1.0);

    gl_Position = projectionMatrix * modelViewPos;

    vNormal = normal;
    vMirrorCoord = uMirrorMatrix * worldPos;
    vWorldPos = worldPos.xyz;
    vModelViewPos = modelViewPos;
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(normalmap.glsl)
#require(radialblur.fs)

void main() {
    vec3 normal = unpackNormal(vModelViewPos.xyz, vNormal, tNormal, 1.0, 1.0, vUv * uTile + vec2(time * 0.0011, time * 0.0015));
    vec3 normal2 = unpackNormal(vModelViewPos.xyz, vNormal, tNormal, 1.0, 1.0, vUv * uTile + vec2(0.5, 0.5) + vec2(time * 0.0014, time * 0.0012));
    normal = mix(normal, normal2, 0.5);

    vec4 st = vMirrorCoord / vMirrorCoord.w;
    st.x += normal.x * uNormalIntensity;
    st.y += normal.y * uNormalIntensity;
    vec3 color = radialBlur(tMirrorReflection, st.xy, 12.0, vec2(1024.0), 4.0).rgb;

    color *= 1.0-uDarken;

    float alpha = uAlpha;
    alpha *= vCenter;

    gl_FragColor = vec4(color, alpha);
}{@}BannerShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tNormal;
uniform float uBrightness;
uniform float uNormalIntensity;
uniform float uTile;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uNormalTile;
uniform vec2 uFresnelBakeMix;
uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uMultiplyColor;
uniform float uRaveVideoScale;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;

uniform vec3 uDistortStrength;
uniform vec3 uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform vec3 uDistortFrequency2;
uniform float uDistortSpeed2;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;
varying float vdataCheck;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed + vdata.r * 2.6);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2 + vdata.r * 4.9);

    if (vdata.r > 0.8){
        pos += crange(uv.x, 0.2, 0.6, 1.0, 0.0) * noise * uDistortStrength * 0.1;
        pos += crange(uv.x, 0.2, 0.6, 1.0, 0.0) * noise2 * uDistortStrength2 * 0.1;
    } else {
        pos += crange(uv.y, 0.0, 1.0, 1.0, 0.0) * noise * uDistortStrength * 0.1;
        pos += crange(uv.y, 0.0, 1.0, 1.0, 0.0) * noise2 * uDistortStrength2 * 0.1;
    }

    vPos = position;
    vdataCheck = vdata.r;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed + vdataCheck * 2.6, time * 0.15 * speed + vdataCheck * 2.6, time * 0.6 * speed + vdataCheck * 2.6)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed + vdataCheck * 2.6, time * 0.13 * speed + vdataCheck * 2.6, time * 1.3 * speed + vdataCheck * 2.6)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed + vdataCheck * 2.6, time * 9.2 * speed + vdataCheck * 2.6, time * 4.3 * speed + vdataCheck * 2.6)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv * uTile;
    vec2 normalUv = vUv * uNormalTile;

    vec4 tex = texture2D(tMap, vUv);
    vec3 color = tex.rgb * uMultiplyColor;

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(normalUv.x, normalUv.y));
    vec3 normalTex = (n1 + n2) / 2.0;

    float avgColor = (color.r + color.g + color.b)/3.0;

    color *= uBrightness;
    color += noise * uNoiseStrength * 0.03;

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel * crange(avgColor, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y)); //crange uBakeMix to account for blending normal better with lighter vs darker color
    color = mix(color, uFogColor, vFog);

    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(uRaveVideoScale), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5 + clampedFresnel * crange(avgColor, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y) * 0.6;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.06, videoColor), uRave);

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave);
        }
    }

    if (tex.a < 0.2) discard;


    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}KeyArtShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tKeyart;
uniform sampler2D tBrush;
uniform sampler2D tNormal;
uniform sampler2D tMRO;
uniform float uSaturation;
uniform float uHue;
uniform float uBrightness;
uniform float uNormalIntensity;
uniform float uTile;
uniform float uAOMix;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uNormalTile;
uniform vec2 uBrushTile;
uniform vec2 uBrushGradient;
uniform float uBrushMix;
uniform vec2 uFresnelBakeMix;
uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uMultiplyColor;
uniform float uRaveVideoScale;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;
varying vec3 vColor;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vUv2 = uv2;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
    vColor = vdata.rgb;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    vec2 uv = vUv * uTile;
    vec2 brushUv = vUv * uBrushTile;
    vec2 normalUv = vUv * uNormalTile;

    vec3 color = texture2D(tMap, vUv).rgb * uMultiplyColor;
    vec3 keyart = texture2D(tKeyart, vUv2).rgb;

    float uBakeMix = color.r;

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(normalUv.x, normalUv.y));
    vec3 normalTex = (n1 + n2) / 2.0;


    float avgColor = (color.r + color.g + color.b)/3.0;

    color += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));
    //color = mix(color, texture2D(tBrush, vec2(brushUv.x * 1.3 + 0.89, brushUv.y * 1.3 + 0.53)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float AO = texture2D(tMRO, vUv).b;
    color *= mix(1.0, AO, uAOMix);

    if (vColor.r > 0.5){
        color = keyart;
    }

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel * crange(uBakeMix, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y)); //crange uBakeMix to account for blending normal better with lighter vs darker color
    color = mix(color, uFogColor, vFog);

    float alpha = crange(vFog, 0.0, 1.0, 1.0, 0.0);

    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(uRaveVideoScale), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5 + clampedFresnel * crange(uBakeMix, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y) * 0.6;
        //videoColor += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor))*0.8;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);
        //videoColor += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));
        //videoColor *= mix(1.0, AO*1.2, uAOMix);

        color = mix(color, max(color*0.06, videoColor), uRave);

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave);
        }
    }


    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}MTGGrassFloorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tGrass;
uniform float uGrassMix;
uniform vec2 uTile;
uniform vec2 uGrassTile;
uniform float uBrightness;
uniform float uAlpha;
uniform vec2 uGradientRange;
uniform float uSaturation;
uniform float uHue;

uniform vec4 uFogParams;
uniform vec3 uFogColor;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform vec3 uTint2;
uniform float uAlphaCutoff;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;
uniform vec4 uAlphaClip;

uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uSunsetColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vMvPos;
varying float vFog;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;

    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1 * uv.y;
    pos += noise2 * uDistortStrength2 * 0.1 * uv.y;
    
    vec4 mvPosition =modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    vMvPos = mvPosition;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(blendmodes.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.15 * speed, time * 0.6 * speed)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.13 * speed, time * 1.3 * speed)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed, time * 9.2 * speed, time * 4.3 * speed)) * 0.06;
    float repeatNoise = cnoise(vPos.xyz * 1.9 * 0.2 + vec3(5.0, 2.0, 3.2)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv;
    vec3 tex = texture2D(tMap, uv * uTile).rgb;
    vec3 grasstex = texture2D(tGrass, uv * uGrassTile).rgb;
    grasstex += repeatNoise;

    vec3 color = mix(tex * uBrightness, grasstex, uGrassMix);

    color = mix(color, uTint2, noise * uNoiseStrength);
    color += noise * uNoiseStrength * 0.03;

    color = saturation(color, uSaturation);
    color = hue(color, uHue);


    //color += clamp(0.0, 1.0, noise) * smoothstep(0.5, 1.0, tex.g);
    color = mix(color, color * crange(vUv.y, 0.0, 1.0, 0.0, 2.0), 0.3);

    color = mix(color, uFogColor, vFog);

    float alpha = crange(vUv.y, uAlphaClip.x, uAlphaClip.y, uAlphaClip.z, uAlphaClip.a);

    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(50.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.1, videoColor), smoothstep(0.5, 1.0, uRave));

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*smoothstep(0.5, 1.0, uRave));
        }
    }

    color = mix(color, color*uSunsetColor, smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color = mix(color, blendOverlay(color, uSunsetColor), smoothstep(0.8, 1.2, uRave));

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}MTGGrassShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform vec2 uTile;
uniform float uBrightness;
uniform float uAlpha;
uniform vec2 uGradientRange;
uniform float uSaturation;
uniform float uHue;

uniform vec4 uFogParams;
uniform vec3 uFogColor;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform vec3 uTint1;
uniform vec3 uTint2;
uniform float uAlphaCutoff;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;
uniform vec4 uAlphaClip;

uniform float uBakeMix;

uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uSunsetColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vMvPos;
varying float vFog;
varying vec3 vColor;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;

    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1 * uv.y;
    pos += noise2 * uDistortStrength2 * 0.1 * uv.y;

    vColor = random.rgb;
    
    vec4 mvPosition =modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    vMvPos = mvPosition;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(blendmodes.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.15 * speed, time * 0.6 * speed)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.13 * speed, time * 1.3 * speed)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed, time * 9.2 * speed, time * 4.3 * speed)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv;
    vec3 tex = texture2D(tMap, uv * uTile).rgb;

    vec3 color = tex;

    color = mix(uTint1, uTint2, crange(vUv.y, 0.0, 1.0, uGradientRange.x, uGradientRange.y));
    color = mix(color, uTint2, noise * uNoiseStrength);
    color.rgb = mix(color.rgb, vColor.rgb, uBakeMix);
    color += noise * uNoiseStrength * 0.03;


    //color += clamp(0.0, 1.0, noise) * smoothstep(0.5, 1.0, tex.g);
    color = mix(color, color * crange(vUv.y, 0.0, 1.0, 0.0, 2.0), 0.3);
    color *= uBrightness;
    color = saturation(color, uSaturation);
    color = hue(color, uHue);

    color = mix(color, uFogColor, vFog);

    if (tex.r < uAlphaCutoff) discard;

    float alpha = crange(vUv.y, uAlphaClip.x, uAlphaClip.y, uAlphaClip.z, uAlphaClip.a);

    if (uRave > 0.0) {

        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(50.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.1, videoColor), smoothstep(0.5, 1.0, uRave));

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*smoothstep(0.5, 1.0, uRave));
        }

    }

    color = mix(color, color*uSunsetColor, smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color = mix(color, blendOverlay(color, uSunsetColor), smoothstep(0.8, 1.2, uRave));

    if (-vMvPos.z > -uFogParams.y) discard;

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}MTGSphereShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tVideo;
uniform vec3 uFresnelColor;
uniform vec3 uSphereColor;
uniform vec3 uSphereColor2;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uFresnelBakeMix;
uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform float uRaveVideoScale;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;
varying vec3 vColor;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    pos.y += 0.1 * sin(time * 3.2 + crange(uv.y, 0.0, 1.0, 1.0, 0.0) - 3.7 * vdata.g);
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
    vColor = vdata.rgb;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(transformUV.glsl)

void main() {
    vec3 color = mix(uSphereColor, uSphereColor2, vUv.y);

    color += 0.4 * sin(time * 3.2 + crange(vUv.y, 0.0, 1.0, 1.0, 0.0) - 2.7 * vColor.g);

    float fresnel = getFresnel(vNormal, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel);
    color = mix(color, uFogColor, vFog);

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}MTGTowerShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tBrush;
uniform sampler2D tNormal;
uniform sampler2D tMRO;
uniform float uNormalIntensity;
uniform float uTile;
uniform float uAOMix;
uniform vec3 uTowerColor;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uNormalTile;
uniform vec2 uBrushTile;
uniform vec2 uBrushGradient;
uniform float uBrushMix;
uniform vec2 uFresnelBakeMix;
uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform float uRaveVideoScale;
uniform vec3 uGlowColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;
varying vec3 vColor;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
    vColor = vdata.rgb;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)

void main() {
    vec2 uv = vUv * uTile;
    vec2 brushUv = vUv * uBrushTile;
    vec2 normalUv = vUv * uNormalTile;

    vec3 color = uTowerColor;

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(normalUv.x, normalUv.y));
    vec3 normalTex = (n1 + n2) / 2.0;

    color += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, color.r));
    //color = mix(color, texture2D(tBrush, vec2(brushUv.x * 1.3 + 0.89, brushUv.y * 1.3 + 0.53)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));

    float AO = texture2D(tMRO, vUv).b;
    color *= mix(1.0, AO, uAOMix);

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    float alpha = 1.0;

    //check for glow gradient
    if (vColor.r > 0.5){
        color = uGlowColor;
        alpha *= crange(vUv.y, 0.0, 1.0, 1.0, 0.0);
        alpha *= crange(clampedFresnel, 0.0, 1.0, 0.9, 0.0);
        alpha *= crange(sin(time * 4.2 + crange(vUv.y, 0.0, 1.0, 1.0, 0.0)), -1.0, 1.0, 0.5, 1.2);
    }

    color = mix(color, uFresnelColor, clampedFresnel);
    color = mix(color, uFogColor, vFog);


    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(uRaveVideoScale), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5 + clampedFresnel;
        //videoColor += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor))*0.8;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);
        //videoColor += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));
        //videoColor *= mix(1.0, AO*1.2, uAOMix);

        color = mix(color, max(color*0.1, videoColor), uRave);

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave);
        }
    }


    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}MTGWaterShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMirrorReflection;
uniform sampler2D tKeyart;
uniform sampler2D tDistort;
uniform vec2 uKeyartTile;
uniform float uKeyartStrength;
uniform mat4 uMirrorMatrix;
uniform float uMirrorColorStrength;
uniform sampler2D tMap;
uniform vec3 uMultiplyColor;
uniform vec3 uTint1;
uniform vec3 uTint2;
uniform float uBrightness;
uniform vec2 TransformTile;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;

uniform float uDistort;
uniform float uDistortTile;
uniform float uSpeed;

#!VARYINGS
varying vec2 vUv;
varying vec4 vMirrorCoord;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vec3 pos = position;
    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    vMirrorCoord = uMirrorMatrix * worldPos;

    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1;
    pos += noise2 * uDistortStrength2 * 0.1;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    vUv = uv;
}

#!SHADER: Fragment
#require(range.glsl)

void main() {
    vec3 distort = texture2D(tDistort, vUv * uDistortTile + TransformTile + (time * uSpeed)).rgb;
    vec3 tex = texture2D(tMap, vUv).rgb * uBrightness;
    vec3 keyart = texture2D(tKeyart, vUv * uKeyartTile + distort.r * uDistort * 0.1).rgb;
    tex = mix(uTint1, uTint2, tex.r);

    tex += keyart * uKeyartStrength;

    vec2 mirrorCoords = vMirrorCoord.xy / vMirrorCoord.w;
    mirrorCoords += distort.r * uDistort * 0.1;
    //mirrorCoords += normal.xy * uMirrorRoughness;

    vec3 mirrorColor;
    #test Tests.renderMirror()
    mirrorColor = texture2D(tMirrorReflection, mirrorCoords).rgb * uMirrorColorStrength;
    tex += mirrorColor;
    #endtest

    tex *= uMultiplyColor;

    gl_FragColor = vec4(tex.rgb, 1.0);
}{@}BlowingLeaves.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tPrevPos;
uniform float uSize;
uniform sampler2D tLife;
uniform float uEnabled;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

#!VARYINGS
varying vec2 vUv;
varying float vMag;
varying float vLife;
varying float vRandom;

#!SHADER: VertexShader.vs
#require(range.glsl)

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec4 prevPos = texture2D(tPrevPos, position.xy);
    vec3 velocity = (decodedPos.xyz - prevPos.xyz);
    vec3 pos = decodedPos.xyz;

    vec4 eyePos = modelViewMatrix * decodedPos;
    vec4 eyePrevPos = modelViewMatrix * prevPos;
    vec3 motionVec = eyePos.xyz - eyePrevPos.xyz;

    float magnitude = length(motionVec);
    vMag = magnitude * 0.004 * (1.0 - uEnabled);

    vec4 mvPosition = eyePos;
    float size = 1000.0 / length(mvPosition.xyz) * 0.01;
    size *= uSize;

    float life = texture2D(tLife, position.xy).r;
    life = life * crange(life, 0.9, 0.5, 0.0, 1.0);
    vLife = life;

    gl_PointSize = max(min(size, 50.0), 5.0) * life;
    gl_Position = projectionMatrix * mvPosition;

    vRandom = random(position.xy);
}

#!SHADER: FragmentShader.fs
#require(range.glsl)
vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

vec4 getSpritesheetFrame(sampler2D spritesheet, float width, float height, float speed, vec2 uv) {
    float t = time * speed;
    vec2 startFrame = uv / vec2(width, height) - vec2(0.0, 1.0 / height);
    vec2 horizontalSpace = vec2(1.0 / width, 0.0);
    vec2 verticalSpace = vec2(0.0, 1.0 / height);
    startFrame += horizontalSpace * floor(fract(t) * width);
    startFrame -= verticalSpace * floor(fract(t / height) * height);

    vec4 frame = texture2D(tMap, startFrame);
    return frame;
}

#!SHADER: Fragment
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
}

vec4 getSpritesheetFrame(sampler2D spritesheet, float width, float height, float speed, vec2 uv, float offset) {
    float t = time * speed;
    vec2 startFrame = uv / vec2(width, height) - vec2(0.0, 1.0 / height);
    vec2 horizontalSpace = vec2(1.0 / width, 0.0);
    vec2 verticalSpace = vec2(0.0, 1.0 / height);
    startFrame += horizontalSpace * floor(fract(t + offset) * width);
    startFrame -= verticalSpace * floor(fract((t + offset) / height) * height);

    vec4 frame = texture2D(tMap, startFrame);
    return frame;
}

void main() {
    vec2 uv = vec2(gl_PointCoord.x, -gl_PointCoord.y + 1.0);
    uv -= vec2(0.5);
    uv = rotate(uv, mod(time, 3.14) * vMag + vRandom * 10.0 + (vMag * 500.0));
    uv += vec2(0.5);

    float circle = 1.0 - distance(uv, vec2(0.5));

    vec4 color = getSpritesheetFrame(tMap, 15.0, 5.0, (1.0 - uEnabled), uv, vRandom * 10.0) * circle;
    color.rgb = mix(
        mix(uColor1, uColor3, uEnabled),
        uColor2, color.r);

    if (color.a < 0.5) discard;
    gl_FragColor = vec4(color.rgb, color.a);
}{@}LeafParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform float uSize;
uniform vec2 uSizeRand;
uniform sampler2D tMap;
uniform float DPR;
uniform float uRes;
uniform vec3 uColor;
uniform float uAlphaCutOff;
uniform vec2 uDistFade;

#!VARYINGS
varying vec2 vUv;
varying float vLife;
varying float vAlpha;
varying vec4 vRandom;
varying float vFog;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;
    float dist = length(pos - cameraPosition);

    vRandom = random;
    vAlpha = 1.0;
    vLife = crange(pos.y, 10.0, -20.0, 0.0, 1.0);

    vFog = crange(dist, uDistFade.x, uDistFade.y, 1.0, 0.0);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * DPR * uRes * uSize * crange(random.x, 0.0, 1.0, uSizeRand.x, uSizeRand.y) * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)

void main() {

    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
    uv = rotateUV(uv, radians(360.0 * vRandom.z)-time*0.6);

    float alpha = smoothstep(0.0, 0.5, texture2D(tMap, uv).r);
    alpha *= vAlpha;

    vec3 color = uColor;
    color.rgb -= vRandom.y*0.32;

    alpha *= smoothstep(1.0, 0.0, vLife);
    alpha *= vFog;

    gl_FragColor = vec4(color, alpha);
}{@}TreeLeafParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform float uSize;
uniform vec2 uSizeRand;
uniform sampler2D tMap;
uniform float DPR;
uniform float uRes;
uniform vec3 uColor;
uniform float uAlphaCutOff;
uniform vec2 uDistFade;

#!VARYINGS
varying vec2 vUv;
varying float vLife;
varying float vAlpha;
varying vec4 vRandom;
varying float vFog;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;
    float dist = length(pos - cameraPosition);

    vRandom = random;
    vAlpha = 1.0;
    vLife = crange(pos.y, 70.0, -15.0, 0.0, 1.0);

    vFog = crange(dist, uDistFade.x, uDistFade.y, 1.0, 0.0);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * DPR * uRes * uSize * crange(random.x, 0.0, 1.0, uSizeRand.x, uSizeRand.y) * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)

void main() {

    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
    uv = rotateUV(uv, radians(360.0 * vRandom.z)-time*0.6);

    float alpha = smoothstep(0.0, 0.5, texture2D(tMap, uv).r);
    alpha *= vAlpha;

    vec3 color = uColor;
    color.rgb -= vRandom.y*0.32;

    alpha *= smoothstep(1.0, 0.0, vLife);
    alpha *= vFog;

    gl_FragColor = vec4(color, alpha);
}{@}PortalShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform float uAlpha;
uniform float uNoiseScale;
uniform float uNoiseTime;
uniform vec3 uColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 color = uColor;

    float alpha = 1.0;

    vec3 posScale = vPos;
    posScale.x *= 0.2;
    posScale.y *= 2.0;
    posScale.z *= 0.2;


    float noise = cnoise(posScale*uNoiseScale+time*uNoiseTime);
    noise = mix(noise, cnoise(posScale*4.0*uNoiseScale+time*uNoiseTime), 0.1);
    noise = smoothstep(-0.8, 0.0, noise) * smoothstep(0.8, 0.0, noise);
    alpha = mix(alpha, alpha*noise, 0.9);
    alpha *= smoothstep(1.2, -0.5, vPos.y);

    alpha = mix(alpha, 1.0, smoothstep(0.15+sin(time)*0.1, 0.0, vPos.y)*0.8);

    alpha *= smoothstep(0.0, 0.01, vPos.y);
    alpha *= uAlpha;


    vec3 rainbow = rgb2hsv(vec3(1.0, 0.7, 0.7));
    rainbow.x += cnoise(posScale*uNoiseScale*0.1+time*uNoiseTime*0.2);
    rainbow = hsv2rgb(rainbow);

    color *= crange(sin(-vUv.y * 30.0 + time * 5.0), -1.0, 1.0, 0.2, 2.0);

    alpha *= crange(sin(-vUv.y * 30.0 + time * 5.0), -1.0, 1.0, 0.2, 1.5);

    color = mix(rainbow, color, smoothstep(0.0, 0.4, alpha));



    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}PotaroShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tMRO;
uniform sampler2D tNormal;
uniform float uSaturation;
uniform float uHue;
uniform float uBrightness;
uniform float uNormalIntensity;
uniform float uTile;
uniform vec3 uFresnelColor;
uniform vec3 uGrassColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uNormalTile;

uniform vec3 uArmStrength;
uniform float uArmFrequency;
uniform float uArmSpeed;
uniform vec3 uBodyStrength;
uniform float uBodyFrequency;
uniform float uBodySpeed;

uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uSunsetColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;
varying vec3 vDataCheck;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    vDataCheck = vdata.rgb;

    //arm wavy
    float armnoise = cnoise(pos.xyz * uArmFrequency + time * 0.5 * uArmSpeed);
    if (vdata.g > 0.5) {
        pos += armnoise * uArmStrength;
    }

    //body breathing
    float bodynoise = cnoise(pos.xyz * uBodyFrequency + time * 0.5 * uBodySpeed);
    if (vdata.r > 0.5) {
        pos.y -= 0.1;
        pos += bodynoise * uBodyStrength;
    }

    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)
#require(blendmodes.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    vec2 uv = vUv * uTile;
    vec2 normalUv = vUv * uNormalTile;

    vec3 color = texture2D(tMap, vUv).rgb;
    float AO = texture2D(tMRO, vUv).b;
    color *= vec3(AO);

    float avgColor = (color.r + color.g + color.b)/3.0;

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(normalUv.x, normalUv.y));
    vec3 normalTex = (n1 + n2) / 2.0;

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);
    color = mix(color, uFresnelColor, clampedFresnel * avgColor);

    float grassblend = (1.0 - smoothstep(-2.2, 1.2, vPos.y));
    color = mix(color, uGrassColor, clampedFresnel * grassblend * avgColor);

    float bodyblend = smoothstep(-1.8, 2.8, vPos.y);
    if (vDataCheck.g > 0.5) {
        color -= vec3(0.05);
    }

    color = mix(color, uFogColor, vFog);

    if (uRave > 0.0) {
        color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));

        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(50.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5 + clampedFresnel * 0.6;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.3, videoColor), smoothstep(0.5, 1.0, uRave));

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*smoothstep(0.5, 1.0, uRave));
        }
    }


    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}RiverShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tNormal;
uniform sampler2D tMRO;
uniform float uNormalIntensity;
uniform float uNormalSpeed;
uniform vec2 uNormalScale;
uniform float uGlowSpeed;
uniform float uGlowStrength;
uniform float uGlowScale;

uniform float uAlpha;
uniform float uNoiseScale;
uniform float uNoiseTime;
uniform float uNoiseStrength;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uRave;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;

uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec2 uFresnelAlphaRange;

uniform vec3 uFogColor;
uniform vec4 uFogParams;
uniform vec3 uSunsetColor;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying float vFog;
varying vec3 vMvPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vModelViewPos;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vUv = uv;
    vec3 pos = position;

    float noise = cnoise(pos.xyz * uDistortFrequency  +time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1;
    pos += noise2 * uDistortStrength2 * 0.1;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vPos = pos;
    vMvPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vModelViewPos = mvPosition.xyz;
    //vec4 worldPos = modelMatrix * vec4(pos, 1.0);
    //vMirrorCoord = uMirrorMatrix * worldPos;
    vViewDir = -mvPosition.xyz;

}

#!SHADER: Fragment
#require(normalmap.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(rgb2hsv.fs)
#require(transformUV.glsl)
#require(fresnel.glsl)

void main() {
    vec3 mro = texture2D(tMRO, vUv).rgb;
    vec2 uv = vec2(vUv.x * uNormalScale.x, vUv.y * uNormalScale.y);

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(uv.x + time * -0.001 * uNormalSpeed, uv.y + time * 0.011 * uNormalSpeed));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(uv.x + time * -0.002 * uNormalSpeed, uv.y + time * 0.021 * uNormalSpeed));
    vec3 normalTex = (n1 + n2) / 2.0;

    vec3 color = uColor;

    float noise1 = cnoise(uv*uNoiseScale+time*uNoiseTime);
    float noise2 = cnoise(uv*uNoiseScale*3.5+time*uNoiseTime);
    float noise3 = cnoise(uv*uNoiseScale*0.15+time*uNoiseTime);

    float glownoise = cnoise(vPos.xyz * 0.15 * uGlowScale + vec3(time * 0.5 * uGlowSpeed, -time * 0.15 * uGlowSpeed, -time * 0.6 * uGlowSpeed)) * 1.1;
    color += glownoise * uGlowStrength;
    
    float caustics = mix(noise1, mix(noise2, noise3, 0.5), 0.3);
    caustics = smoothstep(-0.3, 0.0, caustics) * smoothstep(0.4, 0.0, caustics);
    caustics *= smoothstep(0.6, 0.3, length(vUv-0.5));
    color *= 1.0 + caustics * 0.5 * uNoiseStrength;
    color = mix(color, vec3(1.0), smoothstep(0.9, 1.0, caustics) * uNoiseStrength);
    color *= 1.0 + noise3 * uNoiseStrength * 0.1;

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);
    color = mix(color, uFresnelColor, clampedFresnel);
    color = mix(color, uColor2, mro.b * 1.2);
    //color = mix(color, uColor2, (1.0 - smoothstep(0.0, 0.3, vUv.x));

    //vec2 mirrorCoords = vMirrorCoord.xy / vMirrorCoord.w;
    //mirrorCoords += distort.r * uDistort * 0.1;
    // vec3 mirrorColor;
    // #test Tests.renderMirror()
    // mirrorColor = texture2D(tMirrorReflection, mirrorCoords).rgb * uMirrorColorStrength;
    // #endtest
    // color = mirrorColor;

    color = mix(color, uFogColor, vFog);

    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(40.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= mix(0.0, 1.0, smoothstep(0.0, 1.0, vUv.y));
        videoColor *= 1.0 + smoothstep(0.5, 1.0, caustics);
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);
        color = mix(color, max(color*0.08, videoColor), smoothstep(0.5, 1.0, uRave));
    }

    color = mix(color, color*uSunsetColor, smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color = mix(color, blendSoftLight(color, uSunsetColor), smoothstep(0.8, 1.3, uRave));


    float alpha = crange(clampedFresnel, 0.0, 1.0, uFresnelAlphaRange.x, uFresnelAlphaRange.y); //smoothstep(0.5, 0.2, length(vUv-0.5));
    alpha *= smoothstep(0.02, 0.08, vUv.y);

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}CloudBakeShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform sampler2D tFlow;
uniform sampler2D tMap0;
uniform sampler2D tMap1;
uniform vec3 uLightPos;
uniform vec3 uColor0;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec4 uFogRange;
uniform float uStep;
uniform vec4 uParams;
uniform float uStageLightStrength;
uniform float uLightDistance;
uniform float uLightSpeed;
uniform vec3 uStagePos;
uniform float uRave;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uSunsetColor;

#!VARYINGS
varying vec3 vLightDir;
varying vec2 vUv;
varying float vFog;
varying float vLightDist;
varying vec3 vPos;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)
void main() {
    vec3 pos = position;
    pos += cnoise(pos + time * 0.1);

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPos;

    vLightDir = normalize(vec3(0.0) - uLightPos);
    vUv = uv;
    vFog = smoothstep(uFogRange.x, uFogRange.y, mvPos.z);
    //vLightDist = pow((uLightDistance - clamp(distance(uStagePos, pos.xyz), 0.0, uLightDistance)) / uLightDistance, 2.0);
    vPos = pos;
}

#!SHADER: Fragment
#require(transformUV.glsl)
#require(range.glsl)
#require(blendmodes.glsl)

vec4 getFlow(sampler2D tMap, sampler2D tFlow, vec2 uv, float speed, float strength, float time) {
    float t = time * speed;
    float mask = fract(t);
    mask = (mask- 0.5) * 2.0;
    mask = abs(mask);

    vec2 flow = texture2D(tFlow, uv * uParams.zw).rg;
    flow = flow * 2.0 - 1.0;
    flow = flow * strength;

    vec4 color = texture2D(tMap, uv + flow * fract(t + 0.5));
    vec4 color2 = texture2D(tMap, uv + flow  * fract(t + 0.0));
    color = mix(color2, color, mask);
    return color;
}

void main() {
    // apply a flowmap to mask0. this requires extra texture samples per-pixel so may be expensive
    // change to texture2D(tMap0, vUv) to improve performance
    #test !Tests.simplifiedClouds()
    vec4 mask0 = getFlow(tMap0, tFlow, vUv, uParams.x, uParams.y, time);
    #endtest

    #test Tests.simplifiedClouds()
    vec4 mask0 = texture2D(tMap0, vUv);
    #endtest

    vec4 mask1 = texture2D(tMap1, vUv);

    // mix between top/left/right/bottom textures based on uLightPos
    float x = mix(mask0.r, mask0.b, vLightDir.x * 0.5 + 0.5);
    float y = mix(mask0.g, mask1.g, vLightDir.y * 0.5 + 0.5);
    float z = mix(mask1.r, mask1.g, vLightDir.z * 0.5 + 0.5);
    float lighting = x * abs(vLightDir.x) + y * abs(vLightDir.y) + z * abs(vLightDir.z);
    lighting *= 1.3;

    vec3 color = mix(uColor1, uColor0, lighting);

    // reduce fringing
    mask0.a = pow(mask0.a, 10.0);

    // light cloud from bottom (pulsing sin wave to test)
    // color += mask1.g * uColor3 * pow(sin(time * uLightSpeed) * 0.5 + 0.5, 2.0) * uStageLightStrength * vLightDist;

    if (uRave > 0.0) {
        vec2 origin = vec2(0.2, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 videoUV = scaleUV(vUv, vec2(100.0), origin);
        vec3 video = texture2D(tMap, videoUV).rgb;
        float raveDistance = crange(abs(length(vPos-uRavePos)), uRaveRange.x*0.5, 0.0, 0.0, 1.0);
        color = mix(mix(color, uColor2, smoothstep(0.5, 1.0, uRave)), mix(uColor3*0.3, video, raveDistance), lighting*smoothstep(0.5, 1.0, uRave));
        color += mask1.g * vec3(1., 0., 0.) * pow(sin(time * uLightSpeed) * 0.5 + 0.5, 2.0) * vLightDist * 1.5;
        color += mask1.g * video * raveDistance * 1.0 * smoothstep(0.5, 1.0, uRave);
    }


    color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color = mix(color, blendSoftLight(color, uSunsetColor), smoothstep(0.8, 1.3, uRave));


    gl_FragColor = vec4(color, mask0.a);
}{@}SkyShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec4 uGradient;
uniform float uStars;
uniform float uRave;
uniform vec3 uRavePos;
uniform vec2 uRaveFade;

uniform sampler2D tMap;
uniform sampler2D tStars;
uniform sampler2D tClouds;

uniform float uCldScale;
uniform float uCldSpeed;
uniform float uCldAlpha;
uniform vec3 uCldColor;

uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec3 uSunsetColor;

#!VARYINGS
varying vec2 vUv;
varying vec2 vStarUV;
varying vec3 vPos;
varying vec3 vMvPos;
varying float vFog;
varying vec2 vGradient;


#!SHADER: Vertex

#require(transformUV.glsl)
#require(range.glsl)

void main() {
    vUv = uv;
    vStarUV = scaleUV(vUv, vec2(0.02));
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vMvPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vGradient.x = smoothstep(uGradient.x, uGradient.y, uv.y);
    vGradient.y = smoothstep(uGradient.z, uGradient.w, uv.y);
    vGradient.x = pow(vGradient.x, 2.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(rgb2hsv.fs)
#require(transformUV.glsl)

void main() {
    // vec3 color = mix(uColor, uColor2, smoothstep(0.2, 0.9, vUv.y));


    vec3 color = mix(mix(uColor1, uSunsetColor, smoothstep(0.0, 0.6, uRave)), uColor2, vGradient.x);
    color = mix(color, mix(uColor3, uSunsetColor, smoothstep(0.0, 1.5, uRave)), vGradient.y);

    vec2 cloudUV = vUv*uCldScale*1.0;
    cloudUV.x += time*uCldSpeed*0.02;
    cloudUV.y += time*uCldSpeed*0.01;
    float noise = cnoise(vPos*0.3*uCldScale+time*uCldSpeed*0.1);
    float clouds = texture2D(tClouds, cloudUV).r;
    clouds *= 0.55 + noise * 0.45;
    clouds *= smoothstep(0.2, -0.2, vPos.y);

    vec3 cloudColor = uCldColor;

    if (uRave > 0.0) {
        color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave) * 0.6);

        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(80.0), origin);
        vec3 rawVideoColor = texture2D(tMap, colorUV).rgb;
        vec3 videoColor = rawVideoColor;
        videoColor *= mix(0.0, 1.0, smoothstep(0.0, 1.0, vUv.y));
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveFade.x, uRaveFade.y, 0.0, 1.0);
        color = mix(color, videoColor, uRave*smoothstep(0.5, 1.0, uRave));

        cloudColor = mix(cloudColor, max(cloudColor*0.07, rawVideoColor), smoothstep(0.5, 1.0, uRave));
        clouds *= crange(abs(length(vPos-uRavePos)), uRaveFade.x*1.4, uRaveFade.y*0.5, 0.2, 1.0);
    }

    color = blendAdd(color, cloudColor, clouds*uCldAlpha);

    if (uStars > 0.0) {
        float stars = texture2D(tStars, vStarUV).r;
        stars *= crange(cnoise(vStarUV*7.0+time*0.4), -1.0, 1.0, 0.0, 1.0) * smoothstep(0.0, 1.0, vUv.y);
        color += stars * smoothstep(0.0, 0.5, vUv.y) * uStars * smoothstep(0.5, 1.0, uRave);
    }


    //color = mix(color, uFogColor, vFog);
    
    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.;
}{@}TreeSkyShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uStars;
uniform float uRave;
uniform vec3 uGradientPos;
uniform vec3 uSunsetColor;

uniform sampler2D tMap;
uniform sampler2D tStars;
uniform sampler2D tClouds;

uniform float uCldScale;
uniform float uCldSpeed;
uniform float uCldAlpha;
uniform vec3 uCldColor;

uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec3 uSunsetColor;

#!VARYINGS
varying vec2 vUv;
varying vec2 vStarUV;
varying vec3 vPos;
varying vec3 vMvPos;
varying float vFog;


#!SHADER: Vertex

#require(transformUV.glsl)
#require(range.glsl)

void main() {
    vUv = uv;
    vStarUV = scaleUV(vUv, vec2(0.04));
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vMvPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment
#require(range.glsl)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(rgb2hsv.fs)
#require(transformUV.glsl)

void main() {
    vec3 color = mix(uColor, uColor2, smoothstep(uGradientPos.x, uGradientPos.y, vUv.y));
    color = mix(color, uColor3, smoothstep(uGradientPos.y, uGradientPos.z, vUv.y));

    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vPos.zx*vPos.y, vec2(80.0), origin);
        vec3 videoColor = texture2D(tMap, colorUV).rgb;
        videoColor *= mix(0.0, 1.0, smoothstep(0.0, 1.0, vUv.y));
        color = mix(color, videoColor, uRave);
    }


    if (uStars > 0.0) {
        float stars = texture2D(tStars, vStarUV).r;
        stars *= crange(cnoise(vStarUV*7.0+time*0.4), -1.0, 1.0, 0.0, 1.0) * smoothstep(0.0, 1.0, vUv.y);
        color += stars * smoothstep(0.0, 0.5, vUv.y) * uStars;
    }

    vec2 cloudUV = vUv*uCldScale*1.0;
    cloudUV.x += time*uCldSpeed*0.02;
    cloudUV.y += time*uCldSpeed*0.01;
    float noise = cnoise(vPos*0.3*uCldScale+time*uCldSpeed*0.1);
    float clouds = texture2D(tClouds, cloudUV).r;
    clouds *= 0.55 + noise * 0.45;
    clouds *= smoothstep(0.2, -0.2, vPos.y);
    //clouds *= smoothstep(1.0, 0.95, vUv.x) * smoothstep(0.0, 0.05, vUv.x);

    //colorUV += cnoise(vUv*0.5+time*0.5);
    vec3 cloudColor = uCldColor;//texture2D(tMap, colorUV).rgb;

    color = mix(color, blendOverlay(color, cloudColor), clouds*uCldAlpha);
    color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));

    //color = mix(color, uFogColor, vFog);

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.;
}{@}SponsorTentShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tBrush;
uniform sampler2D tNormal;
uniform vec3 uGrassColor;
uniform vec3 uWireColor;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uBrightness;
uniform vec2 uNormalTile;
uniform float uNormalIntensity;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uBrushTile;
uniform vec2 uBrushGradient;
uniform float uBrushMix;
uniform float uRave;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uSunsetColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying float vColorCheck;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vColorCheck = vdata.r;
    vec3 pos = position;
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)
#require(blendmodes.glsl)

void main() {
    vec2 normalUv = vUv * uNormalTile;
    vec2 brushUv = vUv * uBrushTile;

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(normalUv.x, normalUv.y));
    vec3 normalTex = (n1 + n2) / 2.0;

    vec3 color = uWireColor;

    if (vColorCheck > 0.1 && vColorCheck < 0.3){
        color = uColor1;
    }

    if (vColorCheck > 0.3 && vColorCheck < 0.6){
        color = uColor2;
    }

    if (vColorCheck > 0.7 && vColorCheck < 0.9){
        color = uColor3;
    }

    color *= texture2D(tMap, vUv).r;
    color *= uBrightness;

    float avgColor = (color.r + color.g + color.b)/3.0;
    color += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel);
    float grassblend = (1.0 - smoothstep(8.0, 19.2, vPos.y));
    color = mix(color, uGrassColor, 1.1 * clampedFresnel * grassblend * (avgColor + 0.4));
    color = mix(color, uFogColor, vFog);

    // vec3 invert = vec3(1.0-color.r, 1.0-color.g, 1.0-color.b);
    // invert = rgb2hsv(invert);
    // invert.y = 0.0;
    // invert = hsv2rgb(invert);
    // color = mix(color, invert, uRave);
    

    if (uRave > 0.0) {
        color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));

        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.07)*0.1;
        origin.y += cos(time*0.07)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(20.0), origin);
        vec3 videoTex = texture2D(tVideo, colorUV).rgb;
        videoTex *= smoothstep(uRaveRange.x, uRaveRange.y, abs(length(vPos-uRavePos)));
        videoTex *= 0.7 + clampedFresnel * 0.3;
        color = mix(color, videoTex, smoothstep(0.5, 1.0, uRave));
    }

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}CarpetShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tBrush;
uniform sampler2D tNormal;
uniform float uSaturation;
uniform float uHue;
uniform float uBrightness;
uniform float uNormalIntensity;
uniform float uTile;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uNormalTile;
uniform vec2 uBrushTile;
uniform vec2 uBrushGradient;
uniform float uBrushMix;
uniform vec2 uFresnelBakeMix;
uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uMultiplyColor;
uniform float uRaveVideoScale;
uniform vec3 uSunsetColor;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed * 2.6, time * 0.15 * speed * 2.6, time * 0.6 * speed * 2.6)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed * 2.6, time * 0.13 * speed * 2.6, time * 1.3 * speed * 2.6)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed * 2.6, time * 9.2 * speed * 2.6, time * 4.3 * speed * 2.6)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv * uTile;
    vec2 brushUv = vUv * uBrushTile;
    vec2 normalUv = vUv * uNormalTile;

    vec3 color = texture2D(tMap, vUv).rgb * uMultiplyColor;

    float uBakeMix = color.r;

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(normalUv.x, normalUv.y));
    vec3 normalTex = (n1 + n2) / 2.0;


    float avgColor = (color.r + color.g + color.b)/3.0;

    color += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));
    //color = mix(color, texture2D(tBrush, vec2(brushUv.x * 1.3 + 0.89, brushUv.y * 1.3 + 0.53)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel * crange(uBakeMix, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y)); //crange uBakeMix to account for blending normal better with lighter vs darker color
    color = mix(color, uFogColor, vFog);

    float alpha = crange(vFog, 0.0, 1.0, 1.0, 0.0);
    if (uRave > 0.0) {
        vec2 origin = vec2(0.2, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(uRaveVideoScale), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5 + clampedFresnel * crange(uBakeMix, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y) * 0.6;
        //videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, videoColor, crange(color.r, 0.0, 1.0, 1.0, 0.3)*uRave*smoothstep(0.5, 1.0, uRave));
    }

    color = mix(color, color*uSunsetColor, smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color += noise * uNoiseStrength * 0.03;


    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}MeshLeafShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform vec2 uTile;
uniform float uBrightness;
uniform float uAlpha;
uniform float uSaturation;
uniform float uHue;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;

uniform vec4 uFogParams;
uniform vec3 uFogColor;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;

uniform float uBakeMix;

uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vMvPos;
varying float vFog;
varying vec3 vNormal;
varying vec3 vViewDir;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;

    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1;
    pos += noise2 * uDistortStrength2 * 0.1;
    
    vec4 mvPosition =modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    vMvPos = mvPosition;
    vViewDir = -mvPosition.xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(fresnel.glsl)
#require(transformUV.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.15 * speed, time * 0.6 * speed)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.13 * speed, time * 1.3 * speed)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed, time * 9.2 * speed, time * 4.3 * speed)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv;
    vec3 tex = texture2D(tMap, uv * uTile).rgb;

    vec3 color = tex;
    color += noise * uNoiseStrength * 0.03;

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float fresnel = getFresnel(vNormal, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);
    color = mix(color, uFresnelColor, clampedFresnel * color.g);

    color = mix(color, uFogColor, vFog);

    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(50.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.15, videoColor), uRave);

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave);
        }
    }

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}PlankShader.glsl{@}#!ATTRIBUTES
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform float uBrightness;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec3 uMultiplyColor;
uniform float uAOMix;
uniform float uAlphaMultiply;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;

uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform float uRaveVideoScale;

uniform vec3 uDistortStrength;
uniform vec3 uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform vec3 uDistortFrequency2;
uniform float uDistortSpeed2;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;
varying float vdataCheck;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 pos = position;
    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed + vdata.r * 2.6);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2 + vdata.r * 4.9);
    pos += noise * uDistortStrength * 0.1;
    pos += noise2 * uDistortStrength2 * 0.1;
    
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
    vdataCheck = vdata.r;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(transformUV.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 color = vec3(0.5);

    float AO = texture2D(tMap, vUv).b;
    color *= mix(1.0, AO, uAOMix);

    color *= uBrightness;

    float fresnel = getFresnel(vNormal, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel);
    color = mix(color, uFogColor, vFog);

    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(time * 0.5 * speed + vdataCheck * 2.6, time * 0.15 * speed + vdataCheck * 2.6, -time * 0.6 * speed + vdataCheck * 2.6)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(time * 0.5 * speed + vdataCheck * 2.6, time * 0.13 * speed + vdataCheck * 2.6, -time * 1.3 * speed + vdataCheck * 2.6)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(time * 1.5 * speed + vdataCheck * 2.6, time * 9.2 * speed + vdataCheck * 2.6, -time * 4.3 * speed + vdataCheck * 2.6)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    color += noise * uNoiseStrength * 0.03;
    color *= uMultiplyColor;

    float alpha = crange(color.r, 0.0, 1.0, 0.0, 0.5);
    alpha -= noise * uNoiseStrength * 0.03;
    

    if (vdataCheck > 0.5){
        alpha += crange(sin(-time * 1.5 + vUv.x * 7.0), -1.0, 1.0, -0.7, 0.3);
        alpha += 0.5;
    }

    if (uRave > 0.0) {
        vec2 origin = vec2(0.2, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(uRaveVideoScale), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5 + clampedFresnel * 0.6;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.1, videoColor), uRave);

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave);
        }
    }


    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha * uAlphaMultiply * clampedFresnel;
}{@}SimpleFresnelShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tBrush;
uniform sampler2D tNormal;
uniform sampler2D tMRO;
uniform float uRaveMultiplier;
uniform float uSaturation;
uniform float uHue;
uniform float uBrightness;
uniform float uNormalIntensity;
uniform float uTile;
uniform float uAOMix;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uNormalTile;
uniform vec2 uBrushTile;
uniform vec2 uBrushGradient;
uniform float uBrushMix;
uniform vec2 uFresnelBakeMix;
uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uSunsetColor;
uniform vec3 uMultiplyColor;
uniform float uRaveVideoScale;
uniform float uDisableDotFade;
uniform vec3 uRavePosOffset;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vWorldPos;
varying vec3 vModelViewPos;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)
#require(blendmodes.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    vec2 uv = vUv * uTile;
    vec2 brushUv = vUv * uBrushTile;
    vec2 normalUv = vUv * uNormalTile;

    vec3 color = texture2D(tMap, vUv).rgb * uMultiplyColor;

    float uBakeMix = color.r;

    #test !Tests.simplifiedSimpleFresnelShader()
    vec3 normalTex = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    #endtest

    #test Tests.simplifiedSimpleFresnelShader()
    vec3 normalTex = vNormal;
    #endtest

    float avgColor = (color.r + color.g + color.b)/3.0;
    color += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));
    //color = mix(color, texture2D(tBrush, vec2(brushUv.x * 1.3 + 0.89, brushUv.y * 1.3 + 0.53)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float AO = texture2D(tMRO, vUv).b;
    color *= mix(1.0, AO, uAOMix);

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel * crange(uBakeMix, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y)); //crange uBakeMix to account for blending normal better with lighter vs darker color
    color = mix(color, uFogColor, vFog);

    float alpha = crange(vFog, 0.0, 1.0, 1.0, 0.0);

    if (uRave > 0.0) {

        vec2 origin = vec2(0.2, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(uRaveVideoScale, uRaveVideoScale * (9.0/16.0)), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5 + clampedFresnel * crange(uBakeMix, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y) * 0.6;
        videoColor *= crange(abs(length(vPos-uRavePos-uRavePosOffset)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);
        color = mix(color, max(color*0.1, videoColor), uRave * uRaveMultiplier * smoothstep(0.5, 1.0, uRave));

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave * smoothstep(0.5, 1.0, uRave));
        }
    }

    color = mix(color, color*uSunsetColor, smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color = mix(color, blendOverlay(color, uSunsetColor), smoothstep(0.8, 1.2, uRave));

    #test !Platform.usingVR()
    if (uDisableDotFade < 0.5) {
        vec2 uvRepeat = fract(vUv * 1000.0) - 0.5;
        float radius = crange(length(cameraPosition - vWorldPos), 2.0, 3.0, 0.7, 0.0);
        float circle = 1.0 - smoothstep(radius - radius*0.1, radius, length(uvRepeat));
        if (circle > 0.5) discard;
    }
    #endtest


    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}StageShader.glsl{@}#!ATTRIBUTES
attribute vec2 uv2;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tBrush;
uniform sampler2D tNormal;
uniform sampler2D tMRO;
uniform float uSaturation;
uniform float uHue;
uniform float uBrightness;
uniform float uNormalIntensity;
uniform float uTile;
uniform float uAOMix;
uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform vec2 uNormalTile;
uniform vec2 uBrushTile;
uniform vec2 uBrushGradient;
uniform float uBrushMix;
uniform vec2 uFresnelBakeMix;
uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uMultiplyColor;
uniform float uRaveVideoScale;
uniform vec3 uSunsetColor;
uniform float uRaveUseUV2;

#!VARYINGS
varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vWorldPos;
varying vec3 vModelViewPos;
varying float vFog;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vUv2 = uv2;

    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));

    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)
#require(blendmodes.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    vec2 uv = vUv * uTile;
    vec2 brushUv = vUv * uBrushTile;
    vec2 normalUv = vUv * uNormalTile;

    vec3 color = texture2D(tMap, vUv).rgb * uMultiplyColor;

    float uBakeMix = color.r;

    #test !Tests.simplifiedSimpleFresnelShader()
    vec3 normalTex = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    #endtest

    #test Tests.simplifiedSimpleFresnelShader()
    vec3 normalTex = vNormal;
    #endtest

    float avgColor = (color.r + color.g + color.b)/3.0;
    color += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));
    //color = mix(color, texture2D(tBrush, vec2(brushUv.x * 1.3 + 0.89, brushUv.y * 1.3 + 0.53)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uFresnelColor, clampedFresnel * crange(uBakeMix, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y)); //crange uBakeMix to account for blending normal better with lighter vs darker color
    color = mix(color, uFogColor, vFog);

    float alpha = crange(vFog, 0.0, 1.0, 1.0, 0.0);

    if (uRave > 0.0) {
        color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
        color = mix(color, blendSoftLight(color, uSunsetColor), smoothstep(0.8, 1.3, uRave));

        vec2 origin = vec2(0.2, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(uRaveVideoScale, uRaveVideoScale * (9.0/16.0)), origin);
        colorUV = mix(colorUV, vUv2, uRaveUseUV2);

        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.8 + clampedFresnel * crange(uBakeMix, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y) * 0.6;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);
        color = mix(color, max(color*0.05, videoColor), smoothstep(0.5, 1.0, uRave));

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave);
        }
    }

        float AO = texture2D(tMRO, vUv).b;
    color *= mix(1.0, AO, uAOMix);

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}TreeGrassShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform vec2 uTile;
uniform float uBrightness;
uniform float uAlpha;
uniform vec2 uGradientRange;

uniform vec4 uFogParams;
uniform vec3 uFogColor;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform vec3 uTint1;
uniform vec3 uTint2;
uniform float uAlphaCutoff;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;
uniform vec4 uAlphaClip;

uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec3 uSunsetColor;
uniform vec2 uRaveRange;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vMvPos;
varying float vFog;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;

    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1 * uv.y;
    pos += noise2 * uDistortStrength2 * 0.1 * uv.y;
    
    vec4 mvPosition =modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    vMvPos = mvPosition;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(blendmodes.glsl)

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.15 * speed, time * 0.6 * speed)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.13 * speed, time * 1.3 * speed)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed, time * 9.2 * speed, time * 4.3 * speed)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv;
    vec3 tex = texture2D(tMap, uv * uTile).rgb;

    vec3 color = tex * uBrightness;

    color = mix(uTint1, uTint2, crange(vUv.y, 0.0, 1.0, uGradientRange.x, uGradientRange.y));
    color = mix(color, uTint2, noise * uNoiseStrength);
    color += noise * uNoiseStrength * 0.03;


    //color += clamp(0.0, 1.0, noise) * smoothstep(0.5, 1.0, tex.g);
    color = mix(color, color * crange(vUv.y, 0.0, 1.0, 0.0, 2.0), 0.3);

    color = mix(color, uFogColor, vFog);

    if (tex.r < uAlphaCutoff) discard;

    float alpha = crange(vUv.y, uAlphaClip.x, uAlphaClip.y, uAlphaClip.z, uAlphaClip.a);

    if (uRave > 0.0) {


        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(50.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.07, videoColor), smoothstep(0.5, 1.0, uRave));

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*smoothstep(0.5, 1.0, uRave));
        }

    }

    color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color = mix(color, blendSoftLight(color, uSunsetColor), smoothstep(0.8, 1.3, uRave));

    if (-vMvPos.z > -uFogParams.y) discard;

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}TreeLeafShader.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform vec2 uTile;
uniform float uBrightness;
uniform float uAlpha;
uniform vec2 uGradientRange;
uniform float uSaturation;
uniform float uHue;

uniform vec4 uFogParams;
uniform vec3 uFogColor;

uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform vec3 uTint1;
uniform vec3 uTint2;
uniform float uAlphaCutoff;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;
uniform vec4 uAlphaClip;

uniform float uBakeMix;

uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec4 vMvPos;
varying float vFog;
varying vec4 vColor;

#!SHADER: Vertex
#require(simplenoise.glsl)
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;

    float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1;
    pos += noise2 * uDistortStrength2 * 0.1;
    
    vec4 mvPosition =modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    vColor = random;

    vMvPos = mvPosition;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    float speed = uNoiseSpeed;
    float gust = cnoise(vPos.xyz * 0.15 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.15 * speed, time * 0.6 * speed)) * 1.1;
    float noise = cnoise(vPos.xyz * 0.25 * uNoiseScale + vec3(-time * 0.5 * speed, time * 0.13 * speed, time * 1.3 * speed)) * 1.1;
    float vibrate = cnoise(vPos.xyz * 1.9 * uNoiseScale + vec3(-time * 1.5 * speed, time * 9.2 * speed, time * 4.3 * speed)) * 0.06;
    vibrate *= crange(gust, 0.2, 1.0, 0.0, 1.0);
    noise += gust;

    vec2 uv = vUv;
    vec3 tex = texture2D(tMap, uv * uTile).rgb;

    vec3 color = tex;
    color = mix(uTint1, uTint2, crange(vUv.y, 0.0, 1.0, uGradientRange.x, uGradientRange.y));
    color = mix(color, uTint2, noise * uNoiseStrength);

    color.rgb = mix(color.rgb, vColor.rgb, uBakeMix);

    color += noise * uNoiseStrength * 0.03;

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    color = mix(color, uFogColor, vFog);

    if (uRave > 0.0) {
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(50.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.15, videoColor), uRave);

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave);
        }
    }

    if (tex.r < uAlphaCutoff) discard;
    if (-vMvPos.z > -uFogParams.y) discard;

    float alpha = crange(vUv.y, uAlphaClip.x, uAlphaClip.y, uAlphaClip.z, uAlphaClip.a);

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;
}{@}TreeStumpShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tMap;
uniform sampler2D tRepeatGrass;
uniform sampler2D tRepeatWood;
uniform sampler2D tBrush;
uniform sampler2D tNormal;
uniform sampler2D tMRO;
uniform vec3 uRepeatGrassColor;
uniform vec3 uRepeatWoodColor;
uniform float uRepeatGrassStrength;
uniform float uRepeatWoodStrength;
uniform float uSaturation;
uniform float uHue;
uniform float uBrightness;
uniform float uNormalIntensity;
uniform float uTile;
uniform float uAOMix;
uniform vec3 uWoodFresnelColor;
uniform vec3 uGrassFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec4 uFogParams;
uniform vec3 uFogColor;
uniform float uGrassTile;
uniform float uWoodTile;
uniform vec2 uNormalTile;
uniform vec2 uBrushTile;
uniform vec2 uBrushGradient;
uniform float uBrushMix;
uniform vec2 uFresnelBakeMix;
uniform float uRave;
uniform float uRaveInvert;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;
uniform vec3 uSunsetColor;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vMvPos;
varying vec3 vModelViewPos;
varying float vFog;
varying vec3 vWorldPos;
    
#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vMvPos = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vNormal = normalize(normalMatrix * normal);
        vWorldPos = vec3(modelMatrix * vec4(pos, 1.0));
    vViewDir = -mvPosition.xyz;
    vModelViewPos = mvPosition.xyz;
}

#!SHADER: Fragment
#require(fresnel.glsl)
#require(range.glsl)
#require(normalmap.glsl)
#require(transformUV.glsl)
#require(blendmodes.glsl)

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
vec3 hue(vec3 color, float hue) {
    const vec3 k = vec3(0.57735, 0.57735, 0.57735);
    float cosAngle = cos(hue);
    return vec3(color * cosAngle + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosAngle));
}

void main() {
    vec2 uv = vUv * uTile;
    vec2 brushUv = vUv * uBrushTile;
    vec2 normalUv = vUv * uNormalTile;
    vec2 grassUv = vUv * uGrassTile;
    vec2 woodUv = vUv * uWoodTile;

    vec3 color = texture2D(tMap, vUv).rgb;
    vec3 repeatGrass = texture2D(tRepeatGrass, grassUv).rgb * uRepeatGrassColor;
    vec3 repeatWood = texture2D(tRepeatWood, woodUv).rgb * uRepeatWoodColor;
    vec3 mro = texture2D(tMRO, vUv).rgb;
    float avgColor = (color.r + color.g + color.b)/3.0;

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(normalUv.x + 0.3, normalUv.y + 0.63));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(normalUv.x, normalUv.y));
    vec3 normalTex = (n1 + n2) / 2.0;

    color = mix(color, repeatWood, (1.2-mro.r) * uRepeatWoodStrength);
    color = mix(color, repeatGrass, mro.r+0.1 * uRepeatGrassStrength);

    color += mix(vec3(0.0), texture2D(tBrush, vec2(brushUv.x + 0.3, brushUv.y + 0.2)).rgb, uBrushMix * smoothstep(uBrushGradient.x, uBrushGradient.y, avgColor));

    color = saturation(color, uSaturation);
    color = hue(color, uHue);
    color *= uBrightness;

    color *= mix(1.0, mro.b, uAOMix);

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    color = mix(color, uWoodFresnelColor, clampedFresnel * (1.0-mro.r) * crange(avgColor, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y));
    color = mix(color, uGrassFresnelColor, clampedFresnel * mro.r * crange(avgColor, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y));
    color = mix(color, uFogColor, vFog);

    float alpha = crange(vFog, 0.0, 1.0, 1.0, 0.0);

    if (uRave > 0.0) {
        
        vec2 origin = vec2(0.15, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(50.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= 0.5 + clampedFresnel * crange(avgColor, 0.0, 1.0, uFresnelBakeMix.x, uFresnelBakeMix.y) * 0.6;
        videoColor *= crange(abs(length(vPos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);

        color = mix(color, max(color*0.1, videoColor), uRave);

        if (uRaveInvert > 0.0) {
            vec3 invert = vec3(smoothstep(0.75, 0.2, texture2D(tMap, vUv).r));
            color = mix(color, invert, uRaveInvert*uRave);
        }
    }

    color = mix(color, blendMultiply(color, uSunsetColor), smoothstep(0.0, 0.5, uRave) * smoothstep(1.0, 0.8, uRave));
    color = mix(color, blendSoftLight(color, uSunsetColor), smoothstep(0.8, 1.3, uRave));

        #test !Platform.usingVR()
    vec2 uvRepeat = fract(vUv * 3000.0) - 0.5;
    float radius = crange(length(cameraPosition - vWorldPos), 1.0, 3.0, 0.8, 0.0);
    float circle = 1.0 - smoothstep(radius - radius*0.1, radius, length(uvRepeat));
    if (circle > 0.5) discard;
    #endtest

    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}extraParticles.glsl{@}#!ATTRIBUTES
attribute vec4 random;

#!UNIFORMS
uniform float uSize;
uniform vec2 uSizeRand;
uniform sampler2D tMap;
uniform float DPR;
uniform float uRes;
uniform vec3 uColor;
uniform float uAlphaCutOff;

#!VARYINGS
varying vec2 vUv;
varying float vLife;
varying float vAlpha;
varying vec4 vRandom;
varying vec4 vMvPos;
varying float vPosY;

#!SHADER: Vertex

#require(range.glsl)

void main() {
    vec4 decodedPos = texture2D(tPos, position.xy);
    vec3 pos = decodedPos.xyz;

    float dist = length(pos - cameraPosition);
    vRandom = random;

    vAlpha = 1.0;

    vLife = crange(pos.y, -15.0, 50.0, 0.0, 1.0);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = 0.02 * DPR * uRes * uSize * crange(random.x, 0.0, 1.0, uSizeRand.x, uSizeRand.y) * (1000.0 / length(mvPosition.xyz));
    gl_Position = projectionMatrix * mvPosition;

    vMvPos = mvPosition;
}

#!SHADER: Fragment

#require(range.glsl)
#require(transformUV.glsl)
#require(rgb2hsv.fs)

void main() {

    vec2 uv = vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y);
    uv = rotateUV(uv, radians(360.0 * vRandom.z)-time*0.6);

    float alpha = smoothstep(0.0, 0.5, texture2D(tMap, uv).r);
    alpha *= vAlpha;
    alpha = alpha * abs(0.6 * sin(time * 15.4 - vPosY + vRandom.r * 20.3) + 1.6 * sin(time + vPosY + vRandom.r * 50.7));
    alpha *= 0.3;

    vec3 color = uColor;
    color.rgb -= vRandom.y*0.32;

    alpha *= smoothstep(1.0, 0.0, vLife);
    //if (alpha < 0.002) discard;

    gl_FragColor = vec4(color, alpha);
}{@}VideoColorShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uUVScale;
uniform vec2 uUVPosition;
uniform vec4 uFresnelParams;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying vec3 vMvPos;
varying vec3 vWorldNormal;

#!SHADER: Vertex

void main() {
    vUv = uv;
    vec3 pos = position;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vMvPos = vec3(modelViewMatrix * vec4(pos, 1.0));
    vWorldNormal = normalMatrix * normal;
    vUv = uv;
}

#!SHADER: Fragment

#require(normalmap.glsl)
#require(range.glsl)
#require(simplenoise.glsl)
#require(transformUV.glsl)
#require(rgbshift.fs)
#require(blendmodes.glsl)

void main() {
    vec2 position = uUVPosition;
    position.x += sin(time*0.02)*0.1;
    position.y += cos(time*0.02)*0.1;

    vec2 uv = scaleUV(vUv, vec2(uUVScale), position);

    vec3 color = texture2D(tMap, uv).rgb;

    float fresnel = uFresnelParams.x + uFresnelParams.y * pow(1.0 + dot(normalize(vMvPos), normalize(vWorldNormal)), uFresnelParams.z);

    color = blendOverlay(vec3(0.4+fresnel*0.6), color*0.7);

    //color *= 1.0 + cnoise(vec3(vPos.y)*2.0+time*1.5)*0.2;


    gl_FragColor.rgb = color;
    gl_FragColor.a = 1.0;
}{@}WaterShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tVideo;
uniform sampler2D tNormal;
uniform sampler2D tMRO;
uniform float uNormalIntensity;
uniform float uNormalSpeed;
uniform vec2 uNormalScale;
uniform float uAlpha;
uniform float uNoiseScale;
uniform float uNoiseTime;
uniform float uNoiseStrength;
uniform vec3 uColor;
uniform vec3 uColorEdge;
uniform float uEdgeStrength;
uniform float uRave;
uniform vec3 uRavePos;
uniform vec2 uRaveRange;

uniform float uGlowSpeed;
uniform float uGlowStrength;
uniform float uGlowScale;

uniform vec3 uFogColor;
uniform vec4 uFogParams;
uniform vec3 uSunsetColor;

uniform vec3 uFresnelColor;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;

uniform vec3 uDistortStrength;
uniform float uDistortFrequency;
uniform float uDistortSpeed;
uniform vec3 uDistortStrength2;
uniform float uDistortFrequency2;
uniform float uDistortSpeed2;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying float vFog;
varying vec3 vMvPos;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vModelViewPos;

#!SHADER: Vertex
#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vUv = uv;

    vec3 pos = position;

    float noise = cnoise(pos.xyz * uDistortFrequency  +time * 0.5 * uDistortSpeed);
    float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);
    pos += noise * uDistortStrength * 0.1;
    pos += noise2 * uDistortStrength2 * 0.1;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vPos = pos;
    vMvPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
    vFog = crange(vMvPos.z, uFogParams.x, uFogParams.y, 0.0, 1.0);
    vModelViewPos = mvPosition.xyz;
    vNormal = normalize(normalMatrix * normal);
    vViewDir = -mvPosition.xyz;
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(blendmodes.glsl)
#require(rgb2hsv.fs)
#require(transformUV.glsl)
#require(normalmap.glsl)
#require(fresnel.glsl)

void main() {
    vec3 mro = texture2D(tMRO, vUv).rgb;
    vec2 uv = vec2(vUv.x * uNormalScale.x, vUv.y * uNormalScale.y);

    vec3 n1 = unpackNormal(-vModelViewPos, vNormal, tNormal, 0.9 * uNormalIntensity, 1.0, vec2(uv.x + time * -0.001 * uNormalSpeed, uv.y + time * 0.011 * uNormalSpeed));
    vec3 n2 = unpackNormal(-vModelViewPos, vNormal, tNormal, 1.0 * uNormalIntensity, 1.0, vec2(uv.x * 1.2 + time * -0.002 * uNormalSpeed, uv.y * 1.2 - time * 0.021 * uNormalSpeed));
    vec3 normalTex = (n1 + n2) / 2.0;

    vec3 color = uColor;

    float noise1 = cnoise(vUv*uNoiseScale+time*uNoiseTime);
    float noise2 = cnoise(vUv*uNoiseScale*2.1+time*uNoiseTime);
    float noise3 = cnoise(vUv*uNoiseScale*0.2+time*uNoiseTime);
    

    float caustics = mix(noise1, mix(noise2, noise3, 0.5), 0.5);
    caustics = smoothstep(-0.2, 0.0, caustics) * smoothstep(0.2, 0.0, caustics);
    caustics *= smoothstep(0.6, 0.3, length(vUv-0.5));

    color *= 1.0 + caustics * 0.5 * uNoiseStrength;

    color = mix(color, vec3(1.0), smoothstep(0.9, 1.0, caustics) * uNoiseStrength);

    color *= 1.0 + noise3 * uNoiseStrength * 0.1;
    float glownoise = crange(cnoise(vPos.xyz * 0.15 * uGlowScale + vec3(time * 0.5 * uGlowSpeed, -time * 0.15 * uGlowSpeed, -time * 0.6 * uGlowSpeed)), -1.0, 1.0, -0.5, 0.3);

    float fresnel = getFresnel(normalTex, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);
    color = mix(color, uFresnelColor, clampedFresnel);
    color += glownoise * uGlowStrength;
    color = mix(color, uColorEdge, mro.b * uEdgeStrength); //ao blend edges
    
    color = mix(color, uFogColor, vFog);

    if (uRave > 0.0) {
        

        vec2 origin = vec2(0.2, 0.5);
        origin.x += sin(time*0.05)*0.1;
        origin.y += cos(time*0.05)*0.1;
        vec2 colorUV = scaleUV(vUv, vec2(100.0), origin);
        vec3 videoColor = texture2D(tVideo, colorUV).rgb;
        videoColor *= mix(0.5, 1.0, smoothstep(0.0, 1.0, vUv.y)) * 0.8;
        videoColor *= 1.0 + caustics * 0.5;

        vec3 pos = vPos;
        pos.z -= 320.0;

        videoColor *= crange(abs(length(pos-uRavePos)), uRaveRange.x, uRaveRange.y, 0.0, 1.0);
        videoColor *= normalTex.g;

        color = mix(color, max(color*0.03, videoColor), smoothstep(0.5, 1.0, uRave));
    }

    color = mix(color, color*uSunsetColor, smoothstep(0.0, 0.5, uRave) * smoothstep(1.2, 0.8, uRave));
    color = mix(color, blendSoftLight(color, uSunsetColor), smoothstep(0.8, 1.3, uRave));

    gl_FragColor.rgb = color;
    gl_FragColor.a = smoothstep(0.5, 0.2, length(vUv-0.5)) * 0.8;
}{@}WelcomeBlockShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform vec3 uColor;
uniform vec2 uDistanceFade;
uniform vec3 uNoiseScale2;
uniform float uNoiseSpeed;
uniform float uNoiseStrength;
uniform vec3 uNoiseFade2;
uniform vec2 uNoiseFadeRange;

#!VARYINGS
varying float vAlpha;
varying vec3 vPos;
varying vec2 vUv;
varying float vFocus;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;
    float distance = length(cameraPosition - vec3(modelMatrix * vec4(pos, 1.0)));
    vAlpha =  crange(distance, uDistanceFade.x, uDistanceFade.y, 1.0, 0.0);

    float distance2 = length(uNoiseFade2 - vec3(modelMatrix * vec4(pos, 1.0)));
    vFocus =  crange(distance2, uNoiseFadeRange.x, uNoiseFadeRange.y, 0.0, 1.0);

    vAlpha = mix(1.0, vAlpha, vFocus);


    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}



#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)

void main() {
    vec3 color = uColor;

    vec3 pos = vPos;

    float noise = cnoise(pos*uNoiseScale2+time*uNoiseSpeed);
    float mixNoise = mix(noise, cnoise(pos*uNoiseScale2*uNoiseScale2.z-time*uNoiseSpeed), 0.25);
    mixNoise = smoothstep(-0.1, 0.0, mixNoise) * smoothstep(0.1, 0.0, mixNoise);
    color += mixNoise * uNoiseStrength * vFocus;

    gl_FragColor = vec4(color, vAlpha);
    //gl_FragColor = mix(gl_FragColor, vec4(vec3(1.0,0.0,0.0), 1.0), vFocus);
}{@}WelcomeLogoShader.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform vec2 uDistanceFade;

#!VARYINGS
varying float vAlpha;
varying vec2 vUv;

#!SHADER: Vertex
#require(range.glsl)

void main() {
    vUv = uv;
    vec3 pos = position;
    float distance = length(cameraPosition - vec3(modelMatrix * vec4(pos, 1.0)));
    vAlpha =  crange(distance, uDistanceFade.x, uDistanceFade.y, 1.0, 0.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment
void main() {
    float brightness = texture2D(tMap, vUv).r;
    brightness = smoothstep(0.05, 0.2, brightness);
    vec3 color = vec3(brightness);//mix(vec3(1.0-brightness), vec3(brightness), vAlpha);

    float alpha = brightness;

    //color = mix(color, vec3(1.0, 0.0, 0.0), 0.5);
    //color.a *= vAlpha;

    gl_FragColor = vec4(color, alpha*vAlpha);
}{@}ConcertCamera.glsl{@}#!ATTRIBUTES

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uDepth;
uniform float uDepthContrast;
uniform vec3 uColor;
uniform float uColorBlend;

#!VARYINGS
varying float zDepth;
varying vec2 vUv;
varying vec3 vPos;
varying float vCenter;

#!SHADER: Vertex

#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 tex = texture2D(tMap, uv).rgb;
    zDepth = rgb2hsv(tex).z;

    vec3 pos = position;

    vCenter = smoothstep(0.6, 0.2, length(uv-0.5));

    pos.z += range(zDepth, 0.0, 1.0, -1.0, 1.0)*uDepth;
    pos.z -= cnoise(pos*5.0+time*0.25) * 0.3*uDepth;

    vPos = pos;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec3 tex = texture2D(tMap, vUv).rgb;
    tex = mix(tex, uColor, uColorBlend);

    float alpha = mix(1.0, zDepth, uDepthContrast);
    //alpha *= smoothstep(0.0, 0.2, vUv.y);

    gl_FragColor = vec4(tex, alpha);
}{@}DreamwaveLogo.glsl{@}#!ATTRIBUTES
attribute float alpha;
attribute float index;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uAlpha;
uniform float uHover;
uniform float uUseBatch;

#!VARYINGS
varying vec2 vUv;
varying vec3 vPos;
varying float vAlpha;
varying float vIndex;

#!SHADER: Vertex
void main() {
    vec3 pos = position;
    vPos = pos;
    vUv = uv;
    vIndex = index;
    vAlpha = mix(1.0, alpha, uUseBatch);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

#!SHADER: Fragment

#require(range.glsl)
#require(simplenoise.glsl)
#require(rgb2hsv.fs)

void main() {
    vec4 tex = texture2D(tMap, vUv);

    vec3 color = rgb2hsv(tex.rgb);
    //color.x = time*0.1-vUv.x*0.4+vUv.y*0.1-vIndex*0.05+uHover*0.2;
    //color.y = (1.0-uHover)*0.3;
    color.z = 1.0;
    tex.rgb = hsv2rgb(color);

    tex.a *= uAlpha * vAlpha;
    tex.a = mix(tex.a*0.7, tex.a*1.2, uHover);

    gl_FragColor = tex;
}