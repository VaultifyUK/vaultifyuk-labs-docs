// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.labs.vaultifyuk.co.uk',

  fonts: [
      {
          provider: fontProviders.fontsource(),
          name: 'Montserrat',
          cssVariable: '--font-montserrat',
          weights: ['100 900'],
          subsets: ['latin'],
          display: 'block',
      },
	],

  integrations: [
      starlight({
          title: 'VaultifyUK Labs',
          description: 'Documentation and knowledge base for VaultifyUK Labs products — Shopify tools, automation, and SaaS.',
          editLink: {
              baseUrl: 'https://github.com/VaultifyUK/vaultifyuk-labs-docs/edit/main/'
          },
          logo: {
              src: './src/assets/logo.svg',
              alt: 'VaultifyUK Labs',
          },
          favicon: '/favicon.svg',
          head: [
              {
                  // Force dark mode permanently — runs after ThemeProvider but before paint.
                  // Sets both dataset.theme and localStorage so the preference survives navigation.
                  tag: 'script',
                  content: `(function(){document.documentElement.dataset.theme='dark';try{localStorage.setItem('starlight-theme','dark');}catch(e){}})();`,
              },
              {
                  // Sidebar + TOC collapse — restores persisted state before paint, then
                  // creates both toggle buttons once the DOM is ready.
                  tag: 'script',
                  content: `(function(){
var CHEVRON_L='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';
var CHEVRON_R='<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
function setAttr(attr,c){c?document.documentElement.setAttribute(attr,''):document.documentElement.removeAttribute(attr);}
function setSidebarCollapsed(c){
  setAttr('data-sidebar-collapsed',c);
  var mf=document.querySelector('.main-frame');
  if(mf)mf.style.paddingInlineStart=c?'0':'';
}
// Restore persisted state before paint — only on pages that actually have the
// relevant sidebar, so collapsed state never bleeds onto the homepage etc.
var html=document.documentElement;
try{
  if(html.hasAttribute('data-has-sidebar')&&localStorage.getItem('vault-sidebar-collapsed')==='true')setSidebarCollapsed(true);
  if(html.hasAttribute('data-has-toc')&&localStorage.getItem('vault-toc-collapsed')==='true')setAttr('data-toc-collapsed',true);
}catch(e){}
function makeToggle(className,attr,key,expandLabel,collapseLabel,expandIcon,collapseIcon,onToggle){
  var btn=document.createElement('button');
  btn.className=className;
  btn.type='button';
  function update(){
    var c=document.documentElement.hasAttribute(attr);
    btn.setAttribute('aria-label',c?expandLabel:collapseLabel);
    btn.setAttribute('title',c?expandLabel:collapseLabel);
    btn.innerHTML=c?expandIcon:collapseIcon;
  }
  update();
  btn.addEventListener('click',function(){
    var c=document.documentElement.hasAttribute(attr);
    onToggle(!c);
    try{localStorage.setItem(key,(!c).toString());}catch(e){}
    update();
  });
  document.body.appendChild(btn);
}
function init(){
  // Re-apply inline style now the DOM exists (early restore sets attr but DOM wasn't ready)
  var mf=document.querySelector('.main-frame');
  if(mf&&document.documentElement.hasAttribute('data-sidebar-collapsed'))mf.style.paddingInlineStart='0';
  makeToggle('sidebar-toggle','data-sidebar-collapsed','vault-sidebar-collapsed','Expand sidebar','Collapse sidebar',CHEVRON_R,CHEVRON_L,setSidebarCollapsed);
  makeToggle('toc-toggle','data-toc-collapsed','vault-toc-collapsed','Show table of contents','Hide table of contents',CHEVRON_L,CHEVRON_R,function(c){setAttr('data-toc-collapsed',c);});
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();`,
              },
          ],
          components: {
              Head: './src/components/Head.astro',
              Footer: './src/components/Footer.astro',
              PageFrame: './src/components/PageFrame.astro',
          },
          customCss: ['./src/styles/custom.css'],
          social: [],
          sidebar: [
              {
                  label: 'Smart Collections',
                  items: [
                      { label: 'Overview', slug: 'smart-collections/overview' },
                      { label: 'Getting Started', slug: 'smart-collections/getting-started' },
                      {
                          label: 'Collections',
                          items: [
                              { label: 'Creating & Taking Over Collections', slug: 'smart-collections/creating-and-taking-over-collections' },
                              { label: 'Rule-Based Collections', slug: 'smart-collections/rule-based-collections' },
                              { label: 'Composed Collections', slug: 'smart-collections/composed-collections' },
                          ],
                      },
                      { label: 'Product Pins', slug: 'smart-collections/product-pins' },
                      { label: 'Sorting & Automation', slug: 'smart-collections/sorting-and-automation' },
                      { label: 'Billing & Plans', slug: 'smart-collections/billing-and-plans' },
                      { label: 'Troubleshooting', slug: 'smart-collections/troubleshooting' },
                      { label: 'FAQ', slug: 'smart-collections/faq' },
                  ],
              },
          ],
          pagination: true,
          lastUpdated: false,
      }),
	]
});