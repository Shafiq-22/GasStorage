export type GasEntry={id:number;date:string;time:string;operator:string;gasType:string;location:string;opening:number;received:number;used:number;closing:number;unit:string;status:'Normal'|'Low'|'Critical';notes:string}
export const entries:GasEntry[]=[
 {id:1,date:'2026-09-09',time:'14:30',operator:'Marcus Chen',gasType:'Argon',location:'Bay 01',opening:420,received:0,used:86,closing:334,unit:'m³',status:'Normal',notes:'TIG production run'},
 {id:2,date:'2026-09-09',time:'13:15',operator:'Elena Rodriguez',gasType:'Oxygen',location:'Bay 03',opening:198,received:120,used:54,closing:264,unit:'m³',status:'Normal',notes:'Cutting table replenished'},
 {id:3,date:'2026-09-09',time:'11:45',operator:'James Walker',gasType:'Acetylene',location:'Bay 02',opening:72,received:0,used:29,closing:43,unit:'kg',status:'Low',notes:'Cylinder change due'},
 {id:4,date:'2026-09-09',time:'09:20',operator:'Marcus Chen',gasType:'CO₂',location:'Bay 04',opening:310,received:0,used:42,closing:268,unit:'kg',status:'Normal',notes:'MIG line'},
 {id:5,date:'2026-09-08',time:'16:10',operator:'Priya Shah',gasType:'Nitrogen',location:'Store',opening:155,received:0,used:33,closing:122,unit:'m³',status:'Normal',notes:'Pressure testing'},
 {id:6,date:'2026-09-08',time:'10:30',operator:'James Walker',gasType:'Propane',location:'Yard',opening:38,received:0,used:21,closing:17,unit:'kg',status:'Critical',notes:'Reorder raised'},
]
