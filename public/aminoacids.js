'use strict';
var aminoacid_list = [
  {acid_id: 'I', mw: 131, codon: ['ATT', 'ATC', 'ATA']},
  {acid_id: 'L', mw: 131, codon: ['CTT', 'CTC', 'CTA', 'CTG', 'TTA', 'TTG']},
  {acid_id: 'V', mw: 117, codon: ['GTT', 'GTC', 'GTA', 'GTG']},
  {acid_id: 'F', mw: 165, codon: ['TTT', 'TTC']},
  {acid_id: 'M', mw: 149, codon: ['ATG']},
  {acid_id: 'C', mw: 121, codon: ['TGT', 'TGC']},
  {acid_id: 'A', mw: 89, codon: ['GCT', 'GCC', 'GCA', 'GCG']},
  {acid_id: 'G', mw: 75, codon: ['GGT', 'GGC', 'GGA', 'GGG']},
  {acid_id: 'P', mw: 115, codon: ['CCT', 'CCC', 'CCA', 'CCG']},
  {acid_id: 'T', mw: 119, codon: ['ACT', 'ACC', 'ACA', 'ACG']},
  {acid_id: 'S', mw: 105, codon: ['TCT', 'TCC', 'TCA', 'TCG', 'AGT', 'AGC']},
  {acid_id: 'Y', mw: 181, codon: ['TAT', 'TAC']},
  {acid_id: 'W', mw: 204, codon: ['TGG']},
  {acid_id: 'Q', mw: 146, codon: ['CAA', 'CAG']},
  {acid_id: 'N', mw: 132, codon: ['AAT', 'AAC']},
  {acid_id: 'H', mw: 155, codon: ['CAT', 'CAC']},
  {acid_id: 'E', mw: 147, codon: ['GAA', 'GAG']},
  {acid_id: 'D', mw: 133, codon: ['GAT', 'GAC']},
  {acid_id: 'K', mw: 146, codon: ['AAA', 'AAG']},
  {acid_id: 'R', mw: 174, codon: ['CGT', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG']},
  {acid_id: 'STOP', mw: 0, codon: ['TAA', 'TAG', 'TGA']}
];