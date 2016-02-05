'use strict';
var aminoacid_list = [
  {acid_id: 'I', codon: ['ATT', 'ATC', 'ATA']},
  {acid_id: 'L', codon: ['CTT', 'CTC', 'CTA', 'CTG', 'TTA', 'TTG']},
  {acid_id: 'V', codon: ['GTT', 'GTC', 'GTA', 'GTG']},
  {acid_id: 'F', codon: ['TTT', 'TTC']},
  {acid_id: 'M', codon: ['ATG']},
  {acid_id: 'C', codon: ['TGT', 'TGC']},
  {acid_id: 'A', codon: ['GCT', 'GCC', 'GCA', 'GCG']},
  {acid_id: 'G', codon: ['GGT', 'GGC', 'GGA', 'GGG']},
  {acid_id: 'P', codon: ['CCT', 'CCC', 'CCA', 'CCG']},
  {acid_id: 'T', codon: ['ACT', 'ACC', 'ACA', 'ACG']},
  {acid_id: 'S', codon: ['TCT', 'TCC', 'TCA', 'TCG', 'AGT', 'AGC']},
  {acid_id: 'Y', codon: ['TAT', 'TAC']},
  {acid_id: 'W', codon: ['TGG']},
  {acid_id: 'Q', codon: ['CAA', 'CAG']},
  {acid_id: 'N', codon: ['AAT', 'AAC']},
  {acid_id: 'H', codon: ['CAT', 'CAC']},
  {acid_id: 'E', codon: ['GAA', 'GAG']},
  {acid_id: 'D', codon: ['GAT', 'GAC']},
  {acid_id: 'K', codon: ['AAA', 'AAG']},
  {acid_id: 'R', codon: ['CGT', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG']},
  {acid_id: 'STOP', codon: ['TAA', 'TAG', 'TGA']}
];