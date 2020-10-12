CREATE 
  (`0` :Lab {name:'RMH'}) ,
  (`1` :Role {type:'LabLeader'}) ,
  (`2` :Role {type:'Researcher'}) ,
  (`3` :User {name:'Patto'}) ,
  (`4` :User {name:'Joe'}) ,
  (`5` :User {name:'Nat'}) ,
  (`6` :User {name:'Carlo'}) ,
  (`7` :Lab {name:'VCGS'}) ,
  (`8` :Role {type:'LabLeader'}) ,
  (`9` :Role {type:'Researcher'}) ,
  (`10` :GenomicFile {type:'fastq'}) ,
  (`11` :MACHINE {type:'DRAGEN'}) ,
  (`12` :REQUEST {dateTime:'12102020'}) ,
  (`1`)-[:`MEMBER_OF` ]->(`0`),
  (`2`)-[:`MEMBER_OF` ]->(`0`),
  (`5`)-[:`HAS_ROLE` {from:'2020'}]->(`1`),
  (`6`)-[:`HAS_ROLE` {from:'2020'}]->(`2`),
  (`4`)-[:`HAS_ROLE` {from:'2020'}]->(`8`),
  (`3`)-[:`HAS_ROLE` {from:'2020'}]->(`9`),
  (`9`)-[:`MEMBER_OF` ]->(`7`),
  (`8`)-[:`MEMBER_OF` ]->(`7`),
  (`7`)-[:`CURATES` ]->(`10`),
  (`11`)-[:`PROCESSED` ]->(`10`),
  (`12`)-[:`REQUESTED_DATA` ]->(`10`),
  (`8`)-[:`APPROVES` ]->(`12`),
  (`4`)-[:`HAS_ROLE` {from:'2020'}]->(`9`),
  (`5`)-[:`HAS_ROLE` {from:'2020'}]->(`2`),
  (`6`)-[:`CREATES` ]->(`12`)