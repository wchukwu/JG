FROM python:3.6.2

LABEL maintainer="Farzaneh Khajouei <fkhajoue@broadinstitute.org>" \
      software="subread package" \
      version="2.0.2" \
      description="RNA-seq high-performance read alignment, quantification and mutation discovery" \
      website="http://subread.sourceforge.net/"

# Install compiler 
RUN apt-get update --fix-missing && apt-get install -y \
  wget 

COPY requirements.txt .
RUN pip3 install -r requirements.txt    

# Install subread 
WORKDIR /usr/local/ 
RUN wget https://github.com/alexdobin/STAR/archive/refs/tags/2.7.10a.tar.gz && \ 
  tar -xf 2.7.10a.tar.gz
RUN chmod +x /usr/local/STAR-2.7.10a/bin/Linux_x86_64_static/STAR
ENV PATH /usr/local/STAR-2.7.10a/bin/Linux_x86_64_static/:$PATH


# copy the script that removes alignments spanning intron-exon junctions
RUN mkdir /script
WORKDIR /script
COPY add-introns-to-gtf.py .
COPY modify_gtf.py .
ENV PATH /script/:$PATH
