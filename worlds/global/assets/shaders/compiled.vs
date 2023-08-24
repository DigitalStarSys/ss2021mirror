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
}{@}rgbshift.fs{@}vec4 getRGB(sampler2D tDiffuse, vec2 uv, float angle, float amount) {
    vec2 offset = vec2(cos(angle), sin(angle)) * amount;
    vec4 r = texture2D(tDiffuse, uv + offset);
    vec4 g = texture2D(tDiffuse, uv);
    vec4 b = texture2D(tDiffuse, uv - offset);
    return vec4(r.r, g.g, b.b, g.a);
}{@}luma.fs{@}float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}{@}textureanimation.vs{@}attribute vec2 uv2;

uniform highp sampler2D uAnimationTexture;
uniform float uTextureHeight;
uniform float uAnimationLength[10];
uniform float uOffsets[10];
uniform float uSpeed[10];
uniform float uHzMultiplier;
uniform float speedMultiplier;

vec3 rotate(vec3 v, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat3(c, 0., -s,
                0., 1., 0.,
                s, 0, c) * v;
}

vec3 rotate(vec3 vec, vec4 quat) {
    float angle = atan(quat.w, quat.y) + 3.14159265359;
    vec4 yQuat = vec4(0., sin(angle), 0., cos(angle));
    return vec + 2.0 * cross( cross( vec, yQuat.xyz ) + yQuat.w * vec, yQuat.xyz );
}

vec3 getAnimatedPosition(int animationIndex, float blend) {
    float frames = uAnimationLength[animationIndex];
    float offset = uOffsets[animationIndex];
    float speed = uSpeed[animationIndex];
    float phaseY = fract(speed * time * speedMultiplier * uHzMultiplier) * max(frames - 1., 0.);
    
    vec2 frameOffsetY = vec2(0.0, (offset + floor(phaseY) + 0.5) / uTextureHeight);
    vec3 animationA = texture2D(uAnimationTexture, vec2(uv2.x, 0.) + frameOffsetY).rgb;

    frameOffsetY = vec2(0.0, (offset + ceil(phaseY) + 0.5) / uTextureHeight);
    vec3 animationB = texture2D(uAnimationTexture, vec2(uv2.x, 0.) + frameOffsetY).rgb;

    vec3 animation = mix(animationA, animationB, vec3(fract(phaseY)));

    return mix(position, animation, blend);
}

{@}ControllerShader.glsl{@}#!ATTRIBUTES

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
}{@}SecretSkyAvatar.glsl{@}#!ATTRIBUTES
attribute vec3 offset;
attribute vec3 scale;
attribute vec4 orientation;
attribute vec3 vdata;

#!UNIFORMS
uniform sampler2D tMap;
uniform float uWaving;
uniform vec3 uColor;
uniform vec4 uVelocity;
uniform vec2 uVelocityRange;
uniform vec4 uFresnelParams;
uniform vec2 uClampFrom;
uniform vec2 uClampTo;
uniform vec3 uFresnelColor;
uniform vec3 uWindDirection;
uniform float uAdmin;
uniform float uIsTalking;

#!VARYINGS
varying float vVisibility;
varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vViewDir;
varying vec4 vAvatarData;
varying vec2 vUv;
varying float vDiscard;
varying vec2 vUv2;
varying vec3 windDirection;

#!SHADER: Vertex
#require(range.glsl)
#require(optimizedavatar.vs)
#require(textureanimation.vs)
#require(avatarVR.vs)
#require(simplenoise.glsl)

void main() {

    vPos = position;
    vUv = uv;
    vUv2 = uv2;

    setupAvatar();

    vVisibility = visibility();
    if (vVisibility < 0.5) {
        gl_Position = vec4(0.0);
        return;
    }

    vec3 pos =                  position;
    vNormal =                   normalMatrix * normal;
    vAvatarData =               vec4(0.);

    #ifdef INSTANCED

        vec3 localpos =             position;

        vAvatarData =               getPackedData(0.);
        vec4 vrControllerRight =    getPackedData(1.);
        vec4 vrControllerLeft =     getPackedData(2.);

        float blend =               crange(length(uVelocity.xyz), uVelocityRange.x, uVelocityRange.y, 0.0, 1.0);
        bool walking =              blend > 0.01;

        vec3 vrHandLeft =           vrControllerLeft.rgb + vec3(0., vrControllerLeft.a, 0.);
        vec3 vrHandRight =          vrControllerRight.rgb + vec3(0., vrControllerRight.a, 0.);
        bool isVR =                 length(vrHandLeft) > 0.1 && length(vrHandRight) > 0.1;
        bool isArms =               !all(equal(vdata.yz, vec2(-1.)));
        windDirection =             normalize(uWindDirection);

        vDiscard = 0.;
        if(isArms) {
            vDiscard = 1.;
            if(isArms && (vdata.z > 0.3) && isVR && !walking) vDiscard = 0.;
        }

        if(walking) {

            localpos = getAnimatedPosition(0, blend);

            localpos = rotate(localpos, uVelocity.w);
            vNormal = rotate(vNormal, uVelocity.w);
            windDirection = rotate(windDirection, -uVelocity.w);


        } else {

            //Setting up the arms and orientation if it's VR
        
            if(!setVROrientation(localpos, vNormal, orientation, vrControllerLeft, vrControllerRight)) {
                localpos = rotate(localpos, uVelocity.w);
                vNormal = rotate(vNormal, uVelocity.w);
                windDirection = rotate(windDirection, -uVelocity.w);
            } else {
                windDirection = orientateOnYAxis(windDirection, orientation);
            };
        }
        
        float uDistortFrequency = 2.6;
        float uDistortFrequency2 = 2.2;
        float uDistortSpeed = 2.2;
        float uDistortSpeed2 = 3.3;

        float noise = cnoise(pos.xyz * uDistortFrequency + time * 0.5 * uDistortSpeed);
        float noise2 = cnoise(pos.xyz * uDistortFrequency2 + time * 0.5 * uDistortSpeed2);

        localpos += pow(uv2.y, .2) * noise * 0.02 * windDirection;
        localpos += pow(uv2.y, .2) * noise2 * 0.02 * windDirection;

        pos = transformPosition(localpos, offset, scale);

    #endif

    vec4 modelViewPos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * modelViewPos;
    vViewDir = -vec3(modelViewPos);
}

#!SHADER: Fragment

#require(optimizedavatar.fs)
#require(fresnel.glsl)
#require(range.glsl)
#require(blendmodes.glsl)

vec3 adjustContrast(vec3 color, float c, float m) {
	float t = 0.5 - c * 0.5;
	color.rgb = color.rgb * c + t;
	return color * m;
}

void main() {
    if (vVisibility < 0.5 || vDiscard > 0.5) discard;
    float fresnel = getFresnel(vNormal, vViewDir, 1.0) * 1.0;
    float clampedFresnel = crange(fresnel, uClampFrom.x, uClampFrom.y, uClampTo.x, uClampTo.y);

    float notFace = smoothstep(0.0, 1.0, vUv2.y);

    vec3 color = texture2D(tMap, vUv).rgb;
    //color = adjustContrast(color, 1.02, 0.98);

    color *= mix(0.5, 1.0, 1.0-notFace);
    //vec3 color = vec3(0.1);
    color = mix(color, uFresnelColor * color.r * 20.0, clampedFresnel * notFace); //blend color.r for better shading

    color += clampedFresnel*0.05;

    vec3 colored = color;
    float wave = fract(vUv2.y*3.0+time*0.1);
    wave = smoothstep(-0.5, 0.5, wave) * smoothstep(1.5, 0.5, wave);

    colored = blendOverlay(color, uColor, notFace*0.5);
    colored = mix(colored, uColor, smoothstep(0.25, 0.4, color.r)*smoothstep(0.6, 0.8, vUv2.y)*notFace*wave);
    //colored = mix(color, color*uColor, smoothstep(0.3, 0.5, color.r) * smoothstep(-0.1, 0.8, vUv.y));

    vec3 invert = vec3(1.0-color.r, 1.0-color.g, 1.0-color.b);

    float wave2 = fract(vUv2.y*0.8-time*0.1);
    wave2 = smoothstep(0.0, 0.5, wave2) * smoothstep(1.0, 0.5, wave2);
    //wave2 *= smoothstep(1.0, 0.6, vUv2.y);

    invert = mix(color, invert, mix(smoothstep(0.0, 0.2, vUv2.y)*wave2, 1.0, smoothstep(0.8, 1.0, vUv2.y)));
    color = mix(colored, invert, uAdmin);

    color = mix(color, color + clampedFresnel * 0.6 * smoothstep(-0.8, 1.0, vUv2.y), uIsTalking);

    gl_FragColor = vec4(color, 1.0);
}{@}avatarVR.vs{@}uniform float uNeckHeight;
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

    vec3 upVector = vec3(0., 1., 0.);

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
}