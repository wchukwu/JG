version 1.0

import "../../tasks/broad/UltimaGenomicsWholeGenomeGermlineTasks.wdl" as Tasks
import "../../tasks/broad/Alignment.wdl" as AlignmentTasks
import "../../structs/dna_seq/UltimaGenomicsWholeGenomeGermlineStructs.wdl" as Structs

workflow testBWA {
    input {
        AlignmentReferences alignment_references
        References references
        File input_bam
    }
    call Tasks.SamToFastqAndBwaMemAndMba{
        input:
            alignment_references = alignment_references,
            references = references,
            input_bam = input_bam
    }
}