(() => {
  'use strict';
  const film = document.querySelector('.curiosity-film');
  if (!film) return;
  const canvas = film.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const phases = [
    ['LEARN.', 'Connect ideas. Find new possibilities.'],
    ['BUILD.', 'Turn curiosity into something real.'],
    ['EXPLORE.', 'Beyond the familiar. Into what’s next.']
  ];
  const points = Array.from({length: 170}, (_, i) => {
    const y = 1 - 2 * (i + .5) / 170;
    const a = i * 2.399963;
    return [Math.cos(a) * Math.sqrt(1-y*y), y, Math.sin(a) * Math.sqrt(1-y*y)];
  });
  let w = 0, h = 0, frame = null, active = false, elapsed = 0, previous = 0, phase = -1;
  function resize() {
    const r = film.getBoundingClientRect();
    w = r.width; h = r.height;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(w*dpr); canvas.height = Math.round(h*dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduced.matches) draw(0);
  }
  function draw(t) {
    const next = Math.floor(t / 5) % 3;
    if (phase !== next) {
      phase = next;
      film.dataset.phase = String(phase);
      film.querySelector('.curiosity-index').textContent = `0${phase+1} / 03`;
      film.querySelector('.curiosity-phase').textContent = phases[phase][0];
      film.querySelector('.curiosity-detail').textContent = phases[phase][1];
    }
    ctx.clearRect(0, 0, w, h);
    const cx = w*.5, cy = h*.43, radius = Math.min(w*.3, h*.29);
    const halo = ctx.createRadialGradient(cx,cy,0,cx,cy,radius*1.9);
    halo.addColorStop(0,'#f2491826'); halo.addColorStop(.55,'#9b270b14'); halo.addColorStop(1,'#00000000');
    ctx.fillStyle=halo; ctx.fillRect(0,0,w,h);
    const morph = (1-Math.cos(Math.min((t%5)/1.2,1)*Math.PI))/2;
    const shape = (p, kind) => {
      if (kind===1) { const s=Math.max(...p.map(Math.abs)); return p.map(v=>v/s*.83); }
      if (kind===2) return [p[0]*1.4,p[1]*.45,p[2]*1.4];
      return p;
    };
    const projected=points.map(p=>{
      const from=shape(p,(phase+2)%3), to=shape(p,phase);
      const [x,y,z]=to.map((v,i)=>from[i]+(v-from[i])*morph);
      const breathe = 1 + Math.sin(t*1.5)*.045;
      const angle=t*.42, xx=(x*Math.cos(angle)-z*Math.sin(angle))*breathe, zz=x*Math.sin(angle)+z*Math.cos(angle);
      const yy=y*Math.cos(.25)-zz*Math.sin(.25), depth=y*Math.sin(.25)+zz*Math.cos(.25);
      const scale=3/(3-depth*.4);
      return {x:cx+xx*radius*scale,y:cy+yy*radius*scale,z:depth};
    });
    projected.forEach((p,i)=>{
      for(let j=i+1;j<projected.length;j++) {
        const q=projected[j], distance=Math.hypot(p.x-q.x,p.y-q.y);
        if(distance<radius*.24) {
          ctx.strokeStyle=`rgba(255,115,51,${(1-distance/(radius*.24))*.3})`;
          ctx.lineWidth=.65; ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();
        }
      }
      const pulse = .5 + .5*Math.sin(t*2.5+i*.7);
      ctx.fillStyle=p.z>.2?'#ffddb0':'#d56435';
      ctx.beginPath();ctx.arc(p.x,p.y,(p.z>.2?1.6:1)+pulse*.6,0,Math.PI*2);ctx.fill();
    });
    ctx.strokeStyle='#f0633238';ctx.lineWidth=1;
    ctx.beginPath();ctx.ellipse(cx,cy,radius*1.5,radius*.29,-.22,0,Math.PI*2);ctx.stroke();
    const a=t*1.1;
    const ox=Math.cos(a)*radius*1.5, oy=Math.sin(a)*radius*.29;
    const px=cx+ox*Math.cos(-.22)-oy*Math.sin(-.22), py=cy+ox*Math.sin(-.22)+oy*Math.cos(-.22);
    ctx.shadowColor='#ff8e39';ctx.shadowBlur=18;ctx.fillStyle='#ffe3ad';ctx.beginPath();ctx.arc(px,py,3,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
  }
  function tick(now) {
    if (!active || document.hidden || reduced.matches) {frame=null;previous=0;return;}
    if(previous) elapsed+=Math.min((now-previous)/1000,.05);
    previous=now;draw(elapsed);frame=requestAnimationFrame(tick);
  }
  function start() {if(active && !document.hidden && !reduced.matches && frame===null) frame=requestAnimationFrame(tick);}
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(film);
  else window.addEventListener('resize',resize);
  new IntersectionObserver(entries=>{active=entries[0].isIntersecting;start();},{threshold:.05}).observe(film);
  document.addEventListener('visibilitychange',start);
  reduced.addEventListener('change',()=>{if(reduced.matches) draw(0);else start();});
  resize();draw(0);
})();
